<script setup>
import { useRouter } from 'vue-router'
function goToAbout() {
    const router = useRouter()
    router.replace('/about')
}


</script>

<template>
    <h2>HomeView</h2>
    <button @click="goToAbout">Go to About</button>
</template>