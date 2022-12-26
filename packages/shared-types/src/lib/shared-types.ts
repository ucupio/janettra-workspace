export interface User {
  id: string;
  user_name: string;
  city_id: number;
  address: string;
  contact_phone: string;
  email: string;
  confirmation_code: string;
  password: string;
  time_joined: string;
}

export interface Product {
  id: string;
  productname: string;
  category_id: number;
  description: string;
  ingredients: string;
  recipe: string;
  price: number;
  active: string;
  image: string;
}
export interface Auth {
  token: string;
}

export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE',
}

export interface PayloadProps {
  type: string;
  payload: unknown;
}

export interface StoreObject {
  user: User;
  users: User[];
  product: Product;
  products: Product[];
}
