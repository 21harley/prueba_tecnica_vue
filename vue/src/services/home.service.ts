import axios from 'axios';
import { Product } from '../types/product.interface';
import { Ref } from 'vue';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiService = {
  getProducts() {
    return apiClient.get('/products');
  },

  getProductsById(id: number) {
    return apiClient.get(`/products/${id}`);
  },
};

export default apiService;

export const fullProducts = async (
  products: Ref<Product[]>,
  loading: Ref<boolean>,
  error: Ref<string>
) => {
  loading.value = true;

  try {
    const response = await apiService.getProducts(); 
    products.value = response.data;
    console.log(products);

  } catch (err) {
    error.value = 'Error al cargar los productos.';
  } finally {
    loading.value = false;
  }
};

export const getProductDetails = async (
  id: number,
  products: Ref<Product>,
  loading: Ref<boolean>,
  error: Ref<string>
) => {
  loading.value = true; 

  try {
    const response = await apiService.getProductsById(id); 
    products.value = response.data; 
    console.log(products);

  } catch (err) {
    error.value = 'Error al cargar los productos.'; 
  } finally {
    loading.value = false; 
  }
}