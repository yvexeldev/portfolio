<script setup>
import { Icon } from '@iconify/vue';
import { resume } from '@/constants';
</script>

<template>
    <div class='lg:p-0 p-[20px]'>
        <div class="lg:mt-20 mt-5">
            <h2 class=" flex  lg:text-6xl text-4xl lg:gap-4 gap-2 font-bold mb-5">
                <img src="/linked.svg" alt="" class="lg:w-[3.75rem] w-[36px]" /> <span class='bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:to-gray-400 from-gray-900 to-gray-500'>Resume</span>
            </h2>
            <p class="dark:text-gray-300 text-gray-500 mb-4 flex gap-1 lg:text-2xl text-lg font-bold">
                <img src="/thunder.svg" alt="" class="w-[1.5rem]" />My skills and work experience
            </p>

            <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 mb-4 h-[2px]" />
        </div>

        <div class="resume mt-10 mb-10">
            <h2 class="name lg:text-5xl text-2xl font-[700] dark:text-white text-gray-900 font-sans lg:mb-2 mb-1">{{ resume.name }}</h2>
            <h2 class="job lg:text-3xl text-xl font-[600] dark:text-gray-300 text-gray-600 font-sans lg:mb-4 mb-3">
                {{ resume.job }}
            </h2>

            <div class="flex lg:gap-4 gap-2 flex-wrap items-center mb-10">
                <p class="flex items-center dark:text-gray-300 lg:text-[1.1rem] text-[0.9rem] gap-1">
                    <Icon icon="ic:sharp-phone" class="" />
                    {{ resume.phoneNumber }}
                </p>

                <p class="flex items-center dark:text-gray-300 lg:text-[1.1rem] text-[0.9rem] gap-1">
                    <Icon icon="ic:outline-email" />
                    {{ resume.email }}
                </p>

                <p class="flex items-center dark:text-gray-300 lg:text-[1.1rem] text-[0.9rem] gap-1">
                    <Icon icon="carbon:location" />
                    {{ resume.location }}
                </p>
                <a :href="resume.github.link" class="flex items-center dark:text-gray-300 lg:text-[1.1rem] text-[0.9rem] gap-1">
                    <Icon icon="ri:github-line" />
                    {{ resume.github.title }}
                </a>
            </div>

            <p class="dark:text-gray-300 text-gray-700 lg:text-4xl text-2xl font-semibold font-serif lg:mb-2 mb-1">Summary:</p>
            <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-4 mb-2 h-[2px]" />

            <ul class="dark:text-white lg:text-xl text-[0.8rem] mb-10">
                <li v-for="text in resume.summaryText" :key="text">
                    {{ text }}
                </li>
            </ul>

            <p class="dark:text-gray-300 text-gray-700 lg:text-4xl text-2xl font-semibold font-serif lg:mb-2 mb-1">Experience</p>
            <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-4 mb-2 h-[2px]" />

            <ul class="lg:gap-10 gap-5 lg:mb-10 mb-5 flex flex-col">
                <li v-for="experience in resume.experience" :key="experience.fromTo">
                    <h2 class="dark:text-white text-gray-900 lg:text-3xl text-xl font-[600] lg:mb-2 mb-1">{{ experience.workedAs }}</h2>
                    <div class="flex items-center dark:text-gray-200 text-gray-800 justify-between lg:mb-[0.7rem] mb-2">
                        <p  class="lg:text-2xl text-lg font-[500]">{{ experience.companyName }}</p>
                        <div class="flex items-center  lg:gap-2 justify-center gap-1">
                            <p class="flex items-center gap-1 lg:text-xl text-[10px]">
                                <Icon icon="clarity:calendar-line" class="" />
                                {{ experience.fromTo }}
                            </p>

                            <p class="flex items-center gap-1 lg:text-xl text-[10px]">
                                <Icon icon="carbon:location" class="" />
                                {{ experience.location }}
                            </p>
                        </div>
                    </div>

                    <p class="lg:text-[1rem] text-[0.7rem] dark:text-white text-gray-900">
                        {{ experience.description }}
                    </p>
                </li>
            </ul>

            <p class="dark:text-gray-300 text-gray-700 lg:text-4xl text-2xl font-semibold font-serif lg:mb-2 mb-1">Education</p>
            <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-4 mb-2 h-[2px]" />

            <ul class="lg:gap-10 gap-5 lg:mb-10 mb-5 flex flex-col">
                <li v-for="education in resume.education" :key="education.fromTo">
                    <h2 class="dark:text-white text-gray-900 lg:text-3xl text-[1.1rem] font-[600] lg:mb-2 mb-1">{{ education.title }}</h2>
                    <div class="flex items-center dark:text-gray-200 text-gray-800 justify-between lg:mb-[0.7rem] mb-2">
                        <p  class="lg:text-2xl text-lg font-[500]">{{ education.where }}</p>
                        <div class="flex items-center lg:gap-2 gap-1">
                            <p class="flex items-center gap-1 lg:text-xl text-[10px]">
                                <Icon icon="clarity:calendar-line"  />
                                {{ education.fromTo }}
                            </p>

                            <p class="flex items-center gap-1 lg:text-xl text-[10px]">
                                <Icon icon="carbon:location"  />
                                {{ education.location }}
                            </p>
                        </div>
                    </div>

                    <p class="lg:text-[1rem] text-[0.7rem] dark:text-white text-gray-900">
                        {{ education.description }}
                    </p>
                </li>
            </ul>

            <p class="dark:text-gray-300 text-gray-700 lg:text-4xl text-2xl font-semibold font-serif lg:mb-2 mb-1">Tech Stack</p>
            <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-4 mb-2 h-[2px]" />

            <ul class="flex flex-wrap lg:gap-3 gap-2">
                <li
                    v-for="stack in resume.techStack"
                    :key="stack"
                    class="cursor-pointer dark:border border-2 dark:text-white text-[0.7rem] px-2 py-1 lg:text-sm lg:px-4 lg:py-2 rounded-[5px]"
                >
                    {{ stack }}
                </li>
            </ul>

            <p class="dark:text-gray-300 text-gray-700 lg:text-4xl text-2xl font-semibold font-serif lg:mb-2 mb-1 mt-5">Languages</p>
            <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-4 mb-2 h-[2px]" />

            <ul>
                <li v-for='language in resume.languages' :key='language.lang' class='[&>*]:lg:text-3xl [&>*]:text-lg  dark:text-white flex gap-2 justify-between'>
                    <span class='font-serif font-bold'>{{ language.lang }}</span> <span>{{language.level}}</span>
                </li>
            </ul>
        </div>
        <a
            href="https://drive.google.com/file/d/1vZH4bzfUdz-jUQ7ANKprGauWEyjxXuXa/view"
            class="w-full text-center inline-block lg:py-2 py-1 bg-primary text-white rounded-md font-[500] mb-7"
        >Download</a
        >
    </div>
</template>
<style scoped></style>
