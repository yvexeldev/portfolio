<script setup>
import { computed, ref } from 'vue';
import { useMouseInElement } from '@vueuse/core';

const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

const cardTransform = computed(() => {
    const MAX_ROTATION = 15;

    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2);

    const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);

    return isOutside.value ? '' : `perspective(700px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<template>
    <div class="flex items-center justify-center flex-col gap-10">
        <div
            class="flex items-center justify-center flex-col gap-10"
            ref="target"
            :style="{
                transform: cardTransform,
                transition: 'transform 0.25s ease-out',
            }"
        >
            <img src="/comingsoon.webp" class="w-[50rem]" alt="comingsoon" />
            <h1 class="dark:text-white flex items-center gap-3 text-3xl font-[600]">
                <span class="px-4 py-2 bg-primary rounded-md text-white inline-block">Coming</span>
                <span class="border px-4 rounded-md text-primary py-2 border-primary">Soon! </span>
            </h1>
        </div>
        <RouterLink
            to="/home"
            class="px-4 mx-auto inline-block py-2 bg-primary hover:bg-primary-hover duration-300 text-white rounded-md"
        >
            Back to Home
        </RouterLink>
    </div>
</template>

<style scoped></style>
