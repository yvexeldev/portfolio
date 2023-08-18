<template>
    <div class='mt-32 mb-20'>
        <div class="flex lg:mt-[10rem] mt-[4rem] lg:gap-20 justify-between items-center">
            <div class="lg:w-[45rem] dark:text-gray-100 px-4 lg:px-0">
                <div>
                    <h1
                        class="flex items-center justify-center font-[700] text-5xl font-sans lg:text-7xl lg:max-w-[30rem] mb-5 lg:mb-12"
                    >
                        <img src="/hand.svg" class="lg:w-[72px] w-[48px] lg:h-[72px]" alt="" /><span
                        class="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-blue-400"
                    >Hellooooo!</span
                    >
                    </h1>
                </div>
                <p class="lg:text-lg text-center lg:text-start text-[14px] mt-3 lg:mt-6 lg:w-[45rem]">
                    I'm <span class="font-[600]">A'zam</span> - an open-minded Software Engineer in 🇺🇿
                </p>
                <p class="lg:text-lg text-center lg:text-start text-[14px] mt-3 lg:mt-3 lg:w-[32rem]">
                    I live in <span class="font-[600]">Tashkent, Uzbekistan</span>
                </p>
                <p class="lg:text-lg text-center lg:text-start text-[14px] mt-3 lg:mt-3 lg:w-[32rem]">
                    I started my coding journey in 2020 with C++ at school. I'm in love with the JS ecosystem, web dev, and
                    eCommerce. I created this blog to write what I have learned.
                </p>
                <p class="lg:text-xl text-center lg:text-start text-[14px] mt-3 font-[600] lg:mt-3 lg:w-[32rem]">
                    Happy reading 🍻
                </p>
                <a
                    href="https://payme.uz/ritnyxdev"
                    target="_blank"
                    class="bg-primary inline-block text-[14px] w-full lg:text-start lg:w-auto mt-5 text-center py-2 text-white hover:rounded-3xl hover:bg-primary-hover duration-300 lg:text-lg font-semibold lg:mt-6 rounded-md lg:px-6 lg:py-3"
                >
                    Say hello
                </a>
            </div>
            <div class="lg:min-w-1/2 hidden lg:block">
                <AboutCard />
            </div>
        </div>

    </div>
    <div class='px-5'>


    </div>
    <div class="lg:block hidden mt-40">
        <h1 class="font-bold dark:text-white lg:text-5xl text-gray-900">Latest Post:</h1>
        <ComingSoon />
    </div>
</template>
<script setup>
import AboutCard from './AboutCard.vue';
import ComingSoon from '@/views/ComingSoon.vue';
</script>
<style></style>
