import { lucia } from "lucia";
import { betterSqlite3 } from "@lucia-auth/adapter-sqlite";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");

export const auth = lucia({
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  adapter: betterSqlite3(sqlite, {
    user: "users",
    session: "sessions",
  }),
  getUserAttributes: (data) => {
    return {
      username: data.username,
    };
  },
});
