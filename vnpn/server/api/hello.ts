export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nitro API!',
    time: new Date().toISOString(),
    environment: process.env.NODE_ENV
  }
})
