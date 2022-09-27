<script setup lang="ts">
import { BookApiService } from '@/services/BookApiService';

const service = new BookApiService()
service.list().subscribe(results => console.log(results))

</script>

<template>
  <main>
    <h3> Derniers ajoutés </h3>
    <h3> Les mieux notés</h3>

  </main>
</template>
<style scoped>
main{
  background-color : white;
  color: black; 
  min-height: 100vh;
}

</style>
