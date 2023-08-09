<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <RouterLink to="/">
        <div class="flex cursor-pointer rounded-md duration-300 items-center gap-1">
            <div class="duration-300 bg-primary text-white px-4 py-2 rounded-full font-medium text-xl">A</div>
            <h1 class="text-dark duration-300 dark:text-white font-semibold text-2xl">
                Abdusalomov<span class="text-sm m-0 p-0">.dev</span>
            </h1>
        </div>
    </RouterLink>
</template>

<style></style>
