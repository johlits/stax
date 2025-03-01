import { inferAsyncReturnType } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession } from '@supabase/auth-helpers-nextjs';
import { prisma } from '../db';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the request
  const session = await getSession(req, res);

  return {
    req,
    res,
    prisma,
    session,
    userId: session?.user?.id,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
