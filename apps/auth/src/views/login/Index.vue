<template>
  <main class="w-full max-w-md mx-auto p-6">
    <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account yet?
            <router-link class="text-blue-600 decoration-2 hover:underline font-medium" to="/signup">
              Sign up here
            </router-link>
          </p>
        </div>

        <div class="mt-5">
          <!-- Form -->
          <form>
            <div class="grid gap-y-4">
              <!-- Form Group -->
              <div>
                <TextField label="Email address" />
              </div>
              <!-- End Form Group -->

              <!-- Form Group -->
              <div>
                <TextField label="Password" type="password" />
              </div>
              <!-- End Form Group -->
              <Button text="Sign in" />
            </div>
          </form>
          <!-- End Form -->
        </div>
        <div class="text-center">
          <p class="mt-7 text-sm text-gray-600 dark:text-gray-400">
            <router-link class="text-blue-600 decoration-2 hover:underline font-medium" to="/signup">
              Forgot Password?
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TextField from 'manakit/TextField';
import Button from 'manakit/Button';

export default {
  components: {
    TextField,
    Button,
  }
};
</script>