<template>
  <form @submit.prevent="handleSubmit">
    <h3>Signup</h3>
    <input type="text" placeholder="user name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input
      type="password"
      placeholder="password"
      autocomplete="off"
      v-model="password"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Signup</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  setup() {
     
     
    const email = ref('');
    const password = ref('');
    const displayName = ref('');

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log('logged in');
      }
    };
   
   return{email, password, displayName, handleSubmit}
  },
};
</script>

<style></style>
