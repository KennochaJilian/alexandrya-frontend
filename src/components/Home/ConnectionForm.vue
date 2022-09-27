<script setup lang="ts">
import { ref } from 'vue'
const submitted = ref(false)
const connectionHandler =  (credentials) => {
    console.log(credentials)
}
</script>

<template>
   <FormKit
    type="form"
    id="connection"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Se connecter"
    @submit="connectionHandler"
    :actions="false"
  >
    <FormKit
      type="email"
      name="email"
      placeholder="Email"
      validation="required|email"
    />
    <FormKit
      type="password"
      name="password"
      placeholder="Mot de passe"
      validation="required"
    />
   

    <FormKit
      type="submit"
      label="Se connecter"
    />
  </FormKit>
</template>

<style scoped>

</style>
