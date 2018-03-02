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
    name: String;
    price: Number; 
    createdAt: String; 
    updatedAt: String;
    seller:  String;
}
export interface CartData {
    _id:String;
    name: String;
    price: Number; 
    addedAt: String; 
    seller:  String;
}