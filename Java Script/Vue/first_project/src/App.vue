<template>
  <h1>{{ courseName }}</h1>
  <button @click="count--"> - </button>  
  {{ count }}
  <button @click="count++"> + </button>  
</template>

 <script setup>
 import { ref } from 'vue';
  
  const courseName = ref("Master Vue Js 3");
  const mentor = ref("Zakir Hossain");
  let count = ref(0);
     
 </script>