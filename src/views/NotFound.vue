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
    <div class="flex items-center justify-center gap-6 flex-col mb-40">
        <img
            src="/404.webp"
            class="h-[32rem]"
            alt="404"
            ref="target"
            :style="{
                transform: cardTransform,
                transition: 'transform 0.25s ease-out',
            }"
        />
        <h1 class="text-3xl font-[600] dark:text-white">Hmm.. it seems that you're lost 🤔</h1>
        <p class="text-lg dark:text-white text-gray-900">
            But don't worry, you can find plenty of other things on my homepage.
        </p>
        <RouterLink to="/home" class="px-4 py-2 bg-primary hover:bg-primary-hover duration-300 text-white rounded-md">
            Back to Home
        </RouterLink>
    </div>
</template>

<style scoped></style>
