import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../stores/counter';

describe('Counter Store', () => {
  beforeEach(() => {
    // Create a fresh Pinia instance and set it as active for each test
    setActivePinia(createPinia());
  });

  it('increments the count', () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it('decrements the count', () => {
    const counter = useCounterStore();
    counter.increment();
    expect(counter.count).toBe(1);
    counter.decrement();
    expect(counter.count).toBe(0);
  });

  it('increments by a specific amount', () => {
    const counter = useCounterStore();
    counter.incrementBy(5);
    expect(counter.count).toBe(5);
  });

  it('resets the count', () => {
    const counter = useCounterStore();
    counter.incrementBy(10);
    expect(counter.count).toBe(10);
    counter.reset();
    expect(counter.count).toBe(0);
  });

  it('computes doubleCount correctly', () => {
    const counter = useCounterStore();
    counter.incrementBy(2);
    expect(counter.doubleCount).toBe(4);
  });

  it('determines if count is positive', () => {
    const counter = useCounterStore();
    expect(counter.isPositive).toBe(false);
    counter.increment();
    expect(counter.isPositive).toBe(true);
    counter.reset();
    expect(counter.isPositive).toBe(false);
  });
});
