<template>
    <div class="lg:mt-32 mt-20 mb-20">
        <div class="flex lg:mt-[10rem] gap-20 mt-[4rem] lg:flex-row flex-col lg:gap-20 justify-between items-center">

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
                    I started my coding journey in 2020 with C++ at school. I'm in love with the JS ecosystem, web dev,
                    and eCommerce. I created this blog to write what I have learned.
                </p>
                <p class="lg:text-xl text-center lg:text-start text-[14px] mt-3 font-[600] lg:mt-3 lg:w-[32rem]">
                    Happy reading 🍻
                </p>
                <a
                    href="/contact"
                    class="bg-primary inline-block text-[14px] w-full lg:text-start lg:w-auto mt-5 text-center py-2 text-white hover:rounded-3xl hover:bg-primary-hover duration-300 lg:text-lg font-semibold lg:mt-6 rounded-md lg:px-6 lg:py-3"
                >
                    Say hello
                </a>
            </div>

            <div
                class="card lg:hidden min-w-[40vh] z-10 hover:z-50 dark:shadow-3xl min-h-[28.75rem] flex-col gap-3 rounded-md border border-primary"
            >
                <img class="w-full h-[20rem] rounded-t-md" src="/bg.png" alt="" />

                <div class="pl-4 pb-2 mt-5">
                    <h1 class="dark:text-white text-dark text-lg font-[500]">A'zam</h1>
                    <h1 class="dark:text-gray-300 text-dark text-[1rem] font-[400] mb-2">Learner | Builder</h1>

                    <div class="icons flex flex-col gap-1">
                        <h1 class="flex items-center dark:text-gray-200 text-dark gap-1">
                            <Icon class="dark:text-gray-200 text-dark text-lg" icon="uil:bag-alt" />
                            <span class="text-[1rem]"> Self-Employed - Building Projects </span>
                        </h1>

                        <h1 class="flex items-center dark:text-gray-200 text-dark gap-1">
                            <Icon class="dark:text-gray-200 text-dark text-lg" icon="carbon:location" />
                            <span class="text-[1rem]"> Tashkent, Uzbekistan </span>
                        </h1>

                        <h1 class="flex items-center dark:text-gray-200 text-dark gap-1">
                            <a
                                class="flex items-center dark:text-gray-200 text-dark gap-1"
                                href="mailto:abdusalomovdev@gmail.com"
                            >
                                <Icon class="dark:text-gray-200 text-dark text-lg" icon="carbon:email" />
                                <span class="text-[1rem]">abusalomovdev@gmail.com </span>
                            </a>
                        </h1>

                        <h1 class="flex items-center dark:text-gray-200 text-dark gap-1">
                            <Icon class="dark:text-gray-200 text-dark text-lg" icon="teenyicons:github-outline" />
                            <a class="hover:underline" href="https://github.com/ritnyxdev"
                            ><span class="text-[1rem]">gh/abdusalomovdev</span></a
                            >
                        </h1>
                    </div>
                </div>
                <span
                    class="h-1.5 block rounded-b-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>
            </div>

            <div class="lg:min-w-1/2 hidden lg:block">
                <AboutCard />
            </div>
        </div>
    </div>
    <div class="px-5"></div>
    <div class="lg:block hidden mt-40">
        <h1 class="font-bold dark:text-white lg:text-5xl text-gray-900">Latest Post:</h1>
        <ComingSoon />
    </div>
</template>
<script setup>
import AboutCard from './AboutCard.vue';
import ComingSoon from '@/views/ComingSoon.vue';
import { Icon } from '@iconify/vue';
</script>
<style></style>
