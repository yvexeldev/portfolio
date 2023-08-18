<script setup>
import { computed, ref } from 'vue';
import { useMouseInElement } from '@vueuse/core';
import Footer from '@/views/Footer.vue';

const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

const cardTransform = computed(() => {
    const MAX_ROTATION = 15;

    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2);

    const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);

    return isOutside.value ? '' : `perspective(700px)  rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<template>
    <div class="flex items-center justify-center flex-col gap-10 mb-40">
        <div class="flex items-center justify-center flex-col gap-10">
            <img
                src="/comingsoon.webp"
                class="w-[50rem] hidden lg:block"
                alt="comingsoon"
                ref="target"
                :style="{
                    transform: cardTransform,
                    transition: 'transform 0.25s ease-out',
                }"
            />
            <img src="/comingsoon.webp" alt="comingsoon" class="w-[14rem] block lg:hidden mt-10" />
            <h1
                class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 flex items-center uppercase gap-3 text-3xl font-[700]"
            >
                Coming Soon!
            </h1>
        </div>
        <a
            href="/home"
            class="lg:px-4 mx -auto inline-block lg:py-2 bg-primary hover:bg-primary-hover duration-300 text-sm px-3 py-2 text-white rounded-md"
        >
            Back to Home
        </a>
    </div>
</template>

<style scoped></style>
