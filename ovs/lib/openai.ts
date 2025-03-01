import OpenAI from 'openai';

// Create an OpenAI API client
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// Default model
export const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';

// Check if API key is configured
export const isApiKeyConfigured = !!process.env.OPENAI_API_KEY;
