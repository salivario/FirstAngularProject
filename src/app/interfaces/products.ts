export interface IProducts {
    id: number,
    title: string,
    price: number,
    image?: string,
    config: IProductsConfig,
}

export interface IProductsConfig{
    wheels: number,
    type: string,
}
