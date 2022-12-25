import { Product } from '@janettra-workspace/shared-types';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4444';

export const getProductsAPI = async () => axios.get('/api/products');

export const getProductByIdAPI = async (id: string) =>
  axios.get(`/api/products/${id}`);

export const createProductAPI = async (product: Product) =>
  axios.post(`/api/products`, product);

export const updateProductAPI = async (product: Product) =>
  axios.put(`/api/products/${product.id}`, product);

export const deleteProductByIdAPI = async (id: string) =>
  axios.delete(`/api/products/${id}`);
