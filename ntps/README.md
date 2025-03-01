# NTPS Stack

A modern database and API-focused web application using Next.js, tRPC, Prisma, and Supabase.

## Tech Stack

- **Next.js**: React framework with hybrid static & server rendering
- **tRPC**: End-to-end typesafe APIs
- **Prisma**: Next-generation ORM for Node.js and TypeScript
- **Supabase**: Open source Firebase alternative with authentication and real-time capabilities

## Features

- Type-safe API with tRPC
- Database integration with Prisma
- Authentication with Supabase
- Real-time capabilities
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16.x or later)
- npm or yarn
- PostgreSQL database (local or Supabase)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd stax/ntps
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials and database URL.

4. Run database migrations
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `pages/`: Next.js pages and API routes
- `components/`: React components
- `server/`: tRPC router and procedures
- `prisma/`: Prisma schema and migrations
- `styles/`: CSS and Tailwind configuration
- `utils/`: Utility functions and helpers
- `lib/`: Library code for Supabase and other services

## Development

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Lint code
- `npm run prisma:studio`: Open Prisma Studio to manage database
- `npm run prisma:migrate`: Run database migrations

## Deployment

The application can be deployed to various platforms:

- Vercel
- Netlify
- Railway
- Heroku

Follow the specific deployment instructions for your chosen platform.

## License

[MIT](LICENSE)
