<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fullProducts } from './../../services/home.service';
import { Product } from '../../types/types.interface';

const products = ref<Product[]>([]);
const loading = ref(true);
const error = ref('');

// Función para cargar productos desde localStorage o la API
const loadProducts = () => {
  const storedProducts = localStorage.getItem('products');
  
  if (storedProducts) {
    products.value = JSON.parse(storedProducts);
    loading.value = false; 
  } else {
    fullProducts(products, loading, error).then(() => {
      localStorage.setItem('products', JSON.stringify(products.value)); 
    });
  }
};

onMounted(loadProducts);

</script>

<template>
  <div class="max-w-[800px] mx-auto mt-8 md:mt-16">
    <div v-if="loading">Cargando productos...</div>
    
    <div v-if="!loading && products.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="border rounded-lg shadow-lg p-4 bg-white"
      >
        <img 
          :src="product.image || './../assets/loading.gif'" 
          :alt="product.title" 
          loading="lazy" 
          class="w-full h-48 object-cover object-center"
        />
        <h2 class="text-lg font-bold line-clamp-2 text-black">{{ product.title }}</h2>
        <p class="text-gray-700">{{ product.price }} $</p>
        
        <router-link 
          :to="`/details/${product.id}`" 
          class="text-blue-500 hover:underline mt-2 block"
        >
          Ver detalles
        </router-link>
      </div>
    </div>

    <div v-if="error">{{ error }}</div>
  </div>
</template>
