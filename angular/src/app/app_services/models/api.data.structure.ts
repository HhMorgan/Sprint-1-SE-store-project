export interface APIData {
    err,
    msg: String,
    data;
  }

export interface LoginData {
    username: String;
    password: String;
}
export interface ProductData {
    _id:String;
    name: String;
    price: Number; 
    createdAt: String; 
    updatedAt: String;
    seller:  String;
}