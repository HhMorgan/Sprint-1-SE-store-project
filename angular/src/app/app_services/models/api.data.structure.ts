export interface APIData {
    err,
    msg: String,
    data;
}

export interface LoginData {
    username: String;
    password: String;
    type:String;
}

export interface ProductData {
    _id:String;
    id:number;
    name: String;
    price: Number; 
    createdAt: String; 
    updatedAt: String;
    seller:  String;
}

export interface CartData {
    productId:String;
    username:string;
}