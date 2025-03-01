<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Counter Example with Pinia</h1>
    
    <div class="card max-w-md mx-auto">
      <div class="text-center mb-6">
        <p class="text-6xl font-bold mb-4">{{ counter }}</p>
        <p class="text-gray-600">Current count: {{ counter }}</p>
      </div>
      
      <div class="flex justify-center space-x-4">
        <button @click="decrement" class="btn btn-secondary">Decrement</button>
        <button @click="increment" class="btn btn-primary">Increment</button>
      </div>
      
      <div class="mt-6">
        <p class="text-sm text-gray-600 mb-2">Try these additional actions:</p>
        <div class="flex flex-wrap gap-2">
          <button @click="incrementBy(5)" class="btn bg-green-500 text-white hover:bg-green-700">+5</button>
          <button @click="incrementBy(10)" class="btn bg-blue-500 text-white hover:bg-blue-700">+10</button>
          <button @click="reset" class="btn bg-red-500 text-white hover:bg-red-700">Reset</button>
        </div>
      </div>
      
      <div class="mt-6 pt-4 border-t border-gray-200">
        <p class="text-gray-600 mb-2">Double count (computed): {{ doubleCount }}</p>
        <p class="text-gray-600">Is positive? {{ isPositive ? 'Yes' : 'No' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';

// Get the counter store instance
const counterStore = useCounterStore();

// Destructure to get state and actions
const { count: counter, doubleCount, isPositive } = storeToRefs(counterStore);
const { increment, decrement, incrementBy, reset } = counterStore;
</script>
