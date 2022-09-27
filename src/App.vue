<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import axios from 'axios';
import Axios from 'axios-observable';

axios.defaults.baseURL = Axios.defaults.baseURL = "http://localhost:8000/api/";
</script>

<template>
  <RouterView />
  <Footer/>
</template>

<style scoped>

</style>
