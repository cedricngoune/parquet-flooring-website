type BaqRequest = {
  code: number;
  message: string;
};
type Success = {
  code: number;
  message: string;
};

export type HttpResult = BaqRequest | Success;
