import { IProducts } from "./products";

export interface IClients {
    id:number,
    name:string,
    surname:string,
    email: string,
    phone: number,
    delivery: string,
    userGoods: IProducts[],
}
