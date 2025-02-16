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
      username.length < 3 ||
      username.length > 31 ||
      typeof password !== "string" ||
      password.length < 6 ||
      password.length > 255
    ) {
      return fail(400, {
        message: "Invalid input"
      });
    }

    try {
      const user = await auth.createUser({
        key: {
          providerId: "username",
          providerUserId: username.toLowerCase(),
          password
        },
        attributes: {
          username
        }
      });
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {}
      });
      locals.auth.setSession(session);
    } catch (e) {
      return fail(400, {
        message: "Username already taken"
      });
    }
    throw redirect(302, "/");
  }
};
