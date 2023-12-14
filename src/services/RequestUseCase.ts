import Api from "./index";

const api = new Api();

export const RequestUseCase = async (endpoint: string, method: string, data: any = null) => {
  return await api.executePetition(endpoint, method, data);
};

export const RequestUseCaseRetry = async (
  endpoint: string,
  method: string,
  maxRetries: number,
  backoff: number,
  sleep: (ms: number) => Promise<void>,
  data: any = null
) => {
  return await api.ExecuteWithRetry(endpoint, method, maxRetries, backoff, sleep, data);
};
