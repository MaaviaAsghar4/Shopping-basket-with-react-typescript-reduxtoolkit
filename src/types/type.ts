export interface productType {
    id: number,
    title: string,
    imgURL: string,
    description: string,
    edit: boolean,
    price: number,
}

export interface actionType {
    payload: productType,
    type: string
}