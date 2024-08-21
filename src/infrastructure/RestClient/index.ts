import axios from "axios";
import { INetworkResponse } from "./types";

export class RestClient {
  
  private baseURL = import.meta.env.VITE_API_URL;

  get<ResponseData>(url: string, params?: object):Promise<INetworkResponse<ResponseData>> {
    return new Promise<INetworkResponse<ResponseData>>((resolve, reject) => {            
      this.fetch(url, "GET", params)
      .then((response)=> resolve(response.data))
      .catch((error)=> reject(error.response.data))
    })
  }
    
  post<ResponseData>(url:string, data:object):Promise<INetworkResponse<ResponseData>> {
    return new Promise<INetworkResponse<ResponseData>>((resolve, reject) => {            
      this.fetch(url, "GET", data)
      .then((response)=> resolve(response.data))
      .catch((error)=> reject(error.response.data))
    })
  }

  patch<ResponseData>(url:string, body:object):Promise<INetworkResponse<ResponseData>> {
    return new Promise<INetworkResponse<ResponseData>>((resolve, reject) => {
      this.fetch(url, "POST", body)
      .then((response)=> resolve(response.data))
      .catch((error)=> reject(error.response.data));
    });
  }

  delete(url:string, body?:object):Promise<void> {
    return new Promise((resolve, reject) => {
      this.fetch(url, "DELETE", body)
      .then(()=> resolve())
      .catch((error)=> reject(error.response.data));
    });
  }

  private fetch(url:string, method:"GET"|"POST"|"PATCH"|"DELETE", data?:object) {
    return axios({
      url,
      method,
      baseURL: this.baseURL,
      data,
      withCredentials: true,
    });
  }
}