import { auth } from "$lib/server/auth/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) throw redirect(302, "/");
  return {};
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    if (
      typeof username !== "string" ||
      typeof password !== "string"
    ) {
      return fail(400, {
        message: "Invalid input"
      });
    }

    try {
      const key = await auth.useKey(
        "username",
        username.toLowerCase(),
        password
      );
      const session = await auth.createSession({
        userId: key.userId,
        attributes: {}
      });
      locals.auth.setSession(session);
    } catch (e) {
      return fail(400, {
        message: "Invalid credentials"
      });
    }
    throw redirect(302, "/");
  }
};
