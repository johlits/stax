<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<h1>Create an account</h1>
<form method="post" use:enhance>
  <label for="username">Username</label>
  <input name="username" id="username" /><br />
  <label for="password">Password</label>
  <input type="password" name="password" id="password" /><br />
  <button>Sign up</button>
</form>

<a href="/login">Sign in</a>
