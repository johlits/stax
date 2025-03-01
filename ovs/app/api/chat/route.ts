import { OpenAIStream, StreamingTextResponse } from 'ai';
import { openai, DEFAULT_MODEL, isApiKeyConfigured } from '@/lib/openai';

// Set runtime to edge for streaming
export const runtime = 'edge';

export async function POST(req: Request) {
  // Check if API key is configured
  if (!isApiKeyConfigured) {
    return new Response(
      JSON.stringify({
        error: 'OpenAI API key not configured. Please add your API key to the .env.local file.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Extract the messages from the request body
    const { messages } = await req.json();

    // Request the OpenAI API for the response
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Convert the response into a text-stream
    const stream = OpenAIStream(response);

    // Return a StreamingTextResponse, which is a ReadableStream
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({
        error: error.message || 'An error occurred during the request.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
