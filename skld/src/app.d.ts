/// <reference types="lucia" />
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			auth: import("lucia").AuthRequest;
		}
	}
	namespace Lucia {
		type Auth = import("./lib/server/auth/lucia").Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type DatabaseSessionAttributes = {};
	}
}

export {};
