import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
          OVS Stack
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          An AI-powered application using OpenAI API, Vercel AI SDK, and Next.js
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/chat">Try AI Chat</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/your-username/stax" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg border bg-card p-6 text-left">
            <h2 className="text-xl font-semibold mb-2">OpenAI Integration</h2>
            <p className="text-muted-foreground">
              Powered by OpenAI's GPT models for intelligent conversations and content generation.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-6 text-left">
            <h2 className="text-xl font-semibold mb-2">Vercel AI SDK</h2>
            <p className="text-muted-foreground">
              Streaming responses with the Vercel AI SDK for a smooth, real-time experience.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-6 text-left">
            <h2 className="text-xl font-semibold mb-2">Modern UI</h2>
            <p className="text-muted-foreground">
              Beautiful, responsive interface built with Next.js, Tailwind CSS, and Shadcn/UI.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
