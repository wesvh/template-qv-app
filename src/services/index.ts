import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { API_URL } from "../utils/constants";

/**
 * Clase Api
 * Esta clase proporciona una envoltura alrededor de Axios para realizar solicitudes HTTP.
 * Se pueden realizar peticiones y reintentos automáticos con backoff exponencial.
 */
class Api {
  instance!: any;
  constructor() {
    this.instance = this.createInstance(API_URL);
    this.setupInterceptors();
  }
  private setupInterceptors(): void {
    this.instance.interceptors.response.use((response: AxiosResponse) => {
      console.log(
        `${response.config.baseURL}${response.config.url}`,
        response.config.method,
        "Code: ",
        response.status
      );
      return response;
    });

    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      console.log(
        `${config.baseURL}${config.url}`,
        config.method,
        config.data ? "Data: " + JSON.stringify(config.data) : ""
      );
      return config;
    });
  }
  private createInstance(url: string): AxiosInstance {
    return axios.create({
      baseURL: url,
      responseType: "json",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json"
      }
    });
  }
  /**
   * Ejecuta una petición HTTP.
   * @param {string} url - La URL de la petición.
   * @param {string} method - El método HTTP (get, post, etc.).
   * @param {any} data - Datos opcionales para enviar en la petición.
   * @return La respuesta de la petición.
   */
  async executePetition(url: string, method: string, data: any = null): Promise<any> {
    try {
      const response = await this.instance[method.toLowerCase()](url, data);
      if (![200, 204, 201].includes(response.status)) {
        throw new Error("Error en la petición");
      }
      return response.data;
    } catch (error: any) {
      return { ...error?.response?.data, ok: false, err_catched: error };
    }
  }
  /**
   * Ejecuta una petición con reintentos y backoff exponencial.
   * @param {string} url - La URL de la petición.
   * @param {string} method - El método HTTP (get, post, etc.).
   * @param {number} maxRetries - El número máximo de reintentos.
   * @param {number} backoff - El tiempo inicial de backoff en milisegundos.
   * @param {(ms: number) => Promise<void>} sleep - Función para dormir/delay.
   * @param {any} data - Datos opcionales para enviar en la petición.
   * @return La respuesta de la petición.
   */
  async ExecuteWithRetry(
    url: string,
    method: string,
    maxRetries: number,
    backoff: number,
    sleep: (ms: number) => Promise<void>,
    data: any = null
  ) {
    let retries = 0;
    let delay = backoff;

    while (retries <= maxRetries) {
      const response = await this.ExecutePetition(url, method, data);
      if (response.ok !== false) {
        return response;
      }
      await sleep(delay);
      retries += 1;
      delay *= 1.2;
      console.log("Retrying request... with Delay: ", delay);
    }
    throw new Error("Max retries reached");
  }
}

export default Api;
