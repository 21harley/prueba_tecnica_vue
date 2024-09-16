<script setup lang="ts"></script>

<template>
  <nav class="bg-blue-600 p-4 md:flex md:items-center md:justify-between w-100">
    <!-- Logo -->
    <div class="text-white text-lg font-bold">MyApp</div>

    <!-- Toggle button for mobile -->
    <div class="md:hidden">
      <button
        class="text-white focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Navigation links -->
    <ul
      class="md:flex space-y-4 md:space-y-0 md:space-x-6 md:items-center mt-4 md:mt-0"
      :class="{ hidden: !isOpen }"
    >
      <li>
        <router-link class="text-white hover:text-gray-300" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="text-white hover:text-gray-300" to="/detail">Detail</router-link>
      </li>
      <li>
        <router-link class="text-white hover:text-gray-300" to="/credits">Credits</router-link>
      </li>
    </ul>
  </nav>
  <!-- Router view (renders the selected component) -->
  <router-view />
</template>

<script lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>


