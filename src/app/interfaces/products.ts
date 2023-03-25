export interface IProducts {
    // {
    //     "id":1,
    //     "title": "Велосипед",
    //     "price":5800,
    //     "image":"/assets/images/gt-aggressor-sport-black-velokratia-1280x960.jpg",
    //     "config":{
    //         "wheels": 2,
    //         "type": "спортивний"
    //     }
    // },
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
