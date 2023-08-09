<template>
    <div class="flex mt-[10rem] gap-20 justify-between items-center">
        <div class="w-[45rem] dark:text-gray-100">
            <div>
                <h1
                    class="flex bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-green-600 items-center font-[700] font-sans text-7xl max-w-[30rem] mb-20"
                >
                    <img src="/hand.svg" class="w-[72px] h-[72px]" alt="" />Hi there!
                </h1>
            </div>
            <p class="text-lg mt-6 w-[45rem]">
                I'm <span class="font-[600]">A'zam</span> - an open-minded Software Engineer in 🇺🇿
            </p>
            <p class="text-lg mt-3 w-[32rem]">I live in <span class="font-[600]">Tashkent, Uzbekistan</span></p>
            <p class="text-lg mt-3 w-[32rem]">
                I started my coding journey in 2020 with C++ at school. I'm in love with the JS ecosystem, web dev, and
                eCommerce. I created this blog to write what I have learned.
            </p>
            <p class="text-xl font-[600] mt-3 w-[32rem]">Happy reading 🍻</p>
            <a
                href="https://payme.uz/@ritnyx"
                target="_blank"
                class="bg-primary inline-block text-white hover:rounded-3xl hover:bg-primary-hover duration-300 text-lg font-semibold mt-6 rounded-md px-6 py-3"
            >
                Say hello
            </a>
        </div>
        <div class="min-w-1/2">
            <AboutCard />
        </div>
    </div>
    <hr class="mt-20 mb-28" />

    <!--    TODO: Keyinchalik o'chirish!-->
    <h1 class="text-center dark:text-white text-gray-900 text-[500] text-4xl mb-40">Posts: <br />Coming Soon!</h1>
</template>
<script setup>
import AboutCard from './AboutCard.vue';
</script>
<style></style>
