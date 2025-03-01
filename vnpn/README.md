# VNPN Stack

A modern full-stack web application using Vue 3, Nuxt 3, Pinia, and Nitro.

## Tech Stack

- **Vue 3**: Progressive JavaScript framework with Composition API
- **Nuxt 3**: Vue-based meta-framework for SSR, file-based routing, and more
- **Pinia**: State management solution for Vue applications
- **Nitro**: Server engine that powers Nuxt
- **Vitest**: Testing framework for Vue applications
- **UnoCSS**: Atomic CSS engine for styling

## Features

- Vue 3 Composition API
- Nuxt 3 with SSR and routing
- State management with Pinia
- Server engine with Nitro
- Vitest for testing
- UnoCSS for styling

## Getting Started

### Prerequisites

- Node.js (v16.x or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd stax/vnpn
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `assets/`: Static assets like images and fonts
- `components/`: Vue components
- `composables/`: Vue composables for reusable logic
- `layouts/`: Page layouts
- `pages/`: Application pages and routes
- `public/`: Public files served at root path
- `server/`: Server-side code with API routes
- `stores/`: Pinia stores for state management
- `utils/`: Utility functions

## Development

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run test`: Run tests
- `npm run lint`: Lint code

## Deployment

The application can be deployed to various platforms:

- Vercel
- Netlify
- AWS
- Docker

Follow the specific deployment instructions for your chosen platform.

## License

[MIT](LICENSE)
