export interface IProducts {
    id: number,
    title: string,
    price: number,
    image?: string,
    config: any,
}
export interface IProductsConfig{
    wheels: number,
    type: string,
}
