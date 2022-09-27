<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
<footer>
    <p> Mentions légales </p>
    <p> Copyright 2022 - Aquarius </p>
</footer>
</template>

<style scoped>
footer{
    background-color: black;
    color: white;
    min-height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    min-width: 100vw;
    position: absolute;
    bottom:0;

}
</style>
