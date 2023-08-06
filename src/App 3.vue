<script setup>
import { ref, reactive } from 'vue'

const inputValue = ref('Hello');


</script>

<template>
    
    <div class="mt-64 w-full flex flex-col items-center justify-center ">
        <p class="mb-6 text-4xl text-bold text-red-500">{{ inputValue }}</p>
        <input v-model="inputValue" class="text-2xl w-1/2 border-2 border-red-300 p-4 text-center rounded-lg" type="text" placeholder="value" />
    </div>
</template>

