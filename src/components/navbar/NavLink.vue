<template>
    <RouterLink
        :to="props.to"
        class="lg:px-3 lg:text-lg lg:py-2 flex items-center cursor-pointer bg-transparent dark:text-white text-dark dark:hover:text-primary-hover duration-300 hover:text-primary"
    >
        <slot></slot>
    </RouterLink>
</template>
<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
});
</script>
<style></style>
