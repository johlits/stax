<template>
  <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
    <div v-if="title" class="mb-3">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <div v-if="subtitle" class="text-sm text-gray-600">{{ subtitle }}</div>
    </div>
    
    <div>
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="mt-4 pt-3 border-t border-gray-200">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>
