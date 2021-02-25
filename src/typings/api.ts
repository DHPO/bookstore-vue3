export interface IResponse<T> {
  msg: string
  status: number
  data?: T
}