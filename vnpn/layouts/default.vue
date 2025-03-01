<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-primary-600 text-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">VNPN Stack</NuxtLink>
        <nav>
          <ul class="flex space-x-4">
            <li><NuxtLink to="/" class="hover:text-primary-200 transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-primary-200 transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/counter" class="hover:text-primary-200 transition-colors">Counter</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>
    
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} VNPN Stack. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout-specific logic can go here
</script>
