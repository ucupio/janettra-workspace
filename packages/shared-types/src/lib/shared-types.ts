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

export interface Category {
  id: string;
  categoryname: string;
}

export interface Blogs {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  categoryid: number;
}

export interface Payments {
  id: string;
  title: string;
}

export interface Order {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  amount: number;
}

export interface Cart {
  id: string;
  user_id: string;
  products: Product[];
  quantity: number;
}

export interface Wishlist {
  id: string;
  user_id: string;
  products: Product[];
}

export interface Inbox {
  id: string;
  user_id: string;
  message: string;
  date: string;
  status: string;
  attachment: string;
}

export interface History {
  id: string;
  user_id: string;
  activity_id: string;
}

export interface Activity {
  id: string;
  user_name: string;
  activityname: string;
  date: string;
  status: string;
  amount: number;
  menu: string;
  subMenu: string;
  data?: Record<string, string>;
  old_data?: Record<string, string>;
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
