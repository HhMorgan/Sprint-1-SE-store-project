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
    id: Number;
    name: String;
    price: Number; 
    createdAt: String; 
    updatedAt: String;
    seller:  String;
}