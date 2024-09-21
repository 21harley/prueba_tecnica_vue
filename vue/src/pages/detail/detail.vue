<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Product } from '../../types/types.interface';
import { getProductDetails } from './../../services/home.service'; 


const product = ref<Product>({} as Product);
const loading = ref(true);
const error = ref('');

const route = useRoute(); 
const id = Number(route.params.id); 

onMounted(() => {
  getProductDetails(id, product, loading, error);
});

</script>

<template>
  <div class="max-w-[800px] mx-auto mt-24">
    <router-link to="/" class="text-blue-500 hover:underline">
      <button class="mb-4 flex justify-start hidden md:flex">
        Volver
      </button>
    </router-link>

    <h1 class="text-2xl font-bold mb-4">Detalles del producto</h1>
    <div v-if="loading" class="mb-4">Cargando detalles...</div>
    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
    
    <div v-if="!loading && product" class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-[15px]">
      <div class="flex flex-col justify-start  text-black mt-12 gap-8 text-lg">
        <h2 class="text-lg font-bold  p-6">{{ product.title }}</h2>
        <p class="text-gray-700 p-6">{{ product.description }}</p>
        <p class="text-xl font-bold">{{ product.price }} $</p>
      </div>
      <div class="flex items-center justify-start text-black">
        <img :src="product.image || './../assets/loading.gif'" alt="Cargando..." 
        class="w-full h-[40rem] object-cover object-center rounded-[25px] " />
      </div>
    </div>
  </div>
</template>
