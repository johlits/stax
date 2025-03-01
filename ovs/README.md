# OVS Stack

An AI-powered application using OpenAI API, Vercel AI SDK, and Next.js.

## Tech Stack

- **Next.js**: React framework with App Router
- **OpenAI API**: For AI-powered features
- **Vercel AI SDK**: For streaming AI responses
- **Tailwind CSS**: For styling
- **Shadcn/UI**: Component library built on Radix UI
- **Vercel**: For serverless deployment

## Features

- AI-powered chat interface
- Streaming responses
- Modern UI with responsive design
- Serverless architecture
- Dark mode support

## Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd stax/ovs
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
   Then edit `.env.local` with your OpenAI API key.

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `app/`: Next.js App Router pages and layouts
- `components/`: React components
- `lib/`: Utility functions and API clients
- `public/`: Static assets
- `styles/`: Global styles
- `types/`: TypeScript type definitions

## Development

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Lint code

## Deployment

The application can be deployed to Vercel with a single command:

```bash
vercel
```

## License

[MIT](LICENSE)
