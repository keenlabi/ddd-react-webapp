export interface INetworkResponse<T> {
    statusCode:number;
    message:string;
    data:T;
}