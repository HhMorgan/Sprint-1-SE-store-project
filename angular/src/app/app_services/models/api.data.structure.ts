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
    id: number;
    Name: String;
    Price: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    SellerName: String;
}
