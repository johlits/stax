<template>
  <div>
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Welcome to VNPN Stack</h1>
      <p class="text-xl text-gray-600">A modern full-stack web application using Vue 3, Nuxt 3, Pinia, and Nitro</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="feature in features" :key="feature.title" class="card">
        <h2 class="text-xl font-semibold mb-2">{{ feature.title }}</h2>
        <p class="text-gray-600 mb-4">{{ feature.description }}</p>
        <NuxtLink :to="feature.link" class="btn btn-primary inline-block">Learn More</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Vue 3 Composition API',
    description: 'Build your UI with the latest Vue 3 features including the Composition API for better code organization and reuse.',
    link: 'https://vuejs.org/guide/extras/composition-api-faq.html'
  },
  {
    title: 'Nuxt 3 Framework',
    description: 'Leverage server-side rendering, file-based routing, and other powerful features of the Nuxt 3 framework.',
    link: 'https://nuxt.com/docs'
  },
  {
    title: 'Pinia State Management',
    description: 'Manage your application state with Pinia, the official state management solution for Vue applications.',
    link: '/counter'
  }
];
</script>
