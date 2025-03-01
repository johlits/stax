import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  // State
  state: () => ({
    count: 0
  }),
  
  // Getters (computed properties)
  getters: {
    doubleCount: (state) => state.count * 2,
    isPositive: (state) => state.count > 0
  },
  
  // Actions (methods)
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementBy(amount: number) {
      this.count += amount;
    },
    reset() {
      this.count = 0;
    }
  }
});
