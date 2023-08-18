<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <RouterLink to="/">
        <div class="flex cursor-pointer rounded-md duration-300 items-center gap-1 lg:mb-2">
            <div
                class="duration-300 bg-gradient-to-r from-green-500 to-green-400 text-white text-[0.7rem] px-2 py-1 lg:px-4 lg:py-2 rounded-full font-medium lg:text-xl"
            >
                A
            </div>
            <h1
                class="duration-300 font-[700] text-transparent bg-clip-text bg-gradient-to-r from-green-400  to-blue-300 lg:text-2xl text-[1rem]"
            >
                Abdusalomov<span class="text-sm m-0 p-0">.dev</span>
            </h1>
        </div>
    </RouterLink>
</template>

<style></style>
