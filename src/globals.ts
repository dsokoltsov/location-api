export type FetchUserType = {
  name: string;
  repo: string;
}

export interface SelectorData {
  [name: string]: string;
}


export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}