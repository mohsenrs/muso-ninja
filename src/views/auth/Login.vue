<template>
  <form @submit.prevent="handleSubmit">
    <h3>login</h3>
    <input type="email" placeholder="email" v-model="email" />
    <input
      type="password"
      placeholder="password"
      autocomplete="off"
      v-model="password"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import useLogin from '@/composables/useLogin';
import { ref } from '@vue/reactivity';

export default {
  setup() {
    const { error, login, isPending } = useLogin();

    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log('logged in');
      }
    };

    return { error, login, email, password, handleSubmit, isPending };
  },
};
</script>

<style></style>
