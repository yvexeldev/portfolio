<script setup>
import { Icon } from '@iconify/vue';
import { resume } from '@/constants';
</script>

<template>
  <h1 class="font-bold text-5xl mt-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 ">
    Work. Hobby
  </h1>
  <div class='lg:p-0 p-[20px] lg:mb-5 mb-3'>
    <div class="resume mt-10 mb-5">
      <h2 class="name lg:text-3xl text-[10px] font-neuzerit font-[700] dark:text-white text-gray-900  lg:mb-2 mb-1">{{ resume.name }}</h2>
      <h2 class="job lg:text-xl text-[10px] font-[600] dark:text-gray-300 text-gray-600 font-biotif lg:mb-4 mb-1">
        {{ resume.job }}
      </h2>

      <div class="flex contact lg:gap-2 gap-1  flex-wrap items-center mb-5">
        <p class="flex items-center dark:text-gray-300 lg:text-[0.9rem] text-[0.7rem] gap-1">
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
      </div>

      <p class="dark:text-gray-300 text-gray-700 lg:text-2xl text-[12px] font-semibold font-biotif lg:mb-1 ">Summary:</p>
      <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-2 mb-1 h-[2px]" />

      <ul class="dark:text-white lg:text-[1rem] font-biotif text-[0.8rem] mb-10">
        <li v-for="text in resume.summaryText" :key="text">
          {{ text }}
        </li>
      </ul>

      <p class="dark:text-gray-300 text-gray-700 lg:text-2xl text-[12px] font-semibold font-biotif lg:mb-1 ">Experience:</p>
      <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-2 mb-1 h-[2px]" />

      <ul class="lg:gap-5 gap-3 lg:mb-10 mb-5 flex flex-col">
        <li v-for="experience in resume.experience" :key="experience.fromTo">
          <h2 class="dark:text-white text-gray-900 lg:text-xl text-[1rem] font-[600]">{{ experience.workedAs }}</h2>
          <div class="flex items-center dark:text-gray-200 text-gray-800 justify-between lg:mb-[0.3rem] ">
            <p  class="lg:text-[1.3rem] text-[1rem] font-[500]">{{ experience.companyName }}</p>
            <div class="flex items-center  lg:gap-1 justify-center gap-1">
              <p class="flex items-center gap-1 lg:text-[0.9rem] text-[7px]">
                <Icon icon="clarity:calendar-line" class="" />
                {{ experience.fromTo }}
              </p>

              <p class="flex items-center gap-1 lg:text-[0.9rem] text-[7px]">
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

      <p class="dark:text-gray-300 text-gray-700 lg:text-2xl text-[12px] font-semibold font-biotif lg:mb-1 ">Education:</p>
      <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-2 mb-1 h-[2px]" />

      <ul class="lg:gap-5 gap-3 lg:mb-10 mb-5 flex flex-col">
        <li v-for="education in resume.education" :key="education.fromTo">
          <h2 class="dark:text-white text-gray-900 lg:text-xl text-[1rem] font-[600]">{{ education.title }}</h2>
          <div class="flex items-center dark:text-gray-200 text-gray-800 justify-between lg:mb-[0.3rem] ">
            <p  class="lg:text-[1.3rem] text-[1rem] font-[500]">{{ education.where }}</p>
            <div class="flex items-center  lg:gap-1 justify-center gap-1">
              <p class="flex items-center gap-1 lg:text-[0.9rem] text-[7px]">
                <Icon icon="clarity:calendar-line" class="" />
                {{ education.fromTo }}
              </p>

              <p class="flex items-center gap-1 lg:text-[0.9rem] text-[7px]">
                <Icon icon="carbon:location" class="" />
                {{ education.location }}
              </p>
            </div>
          </div>

          <p class="lg:text-[1rem] text-[0.7rem] dark:text-white text-gray-900">
            {{ education.description }}
          </p>
        </li>
      </ul>

      <p class="dark:text-gray-300 text-gray-700 lg:text-2xl text-[12px] font-semibold font-biotif lg:mb-1 ">Tech Stack:</p>
      <hr class="dark:bg-gray-300 bg-gray-900 dark:h-0 lg:mb-2 mb-1 h-[2px] " />

      <ul class="flex flex-wrap lg:gap-1.5 gap-0.5 mt-2">
        <li
            v-for="stack in resume.techStack"
            :key="stack"
            class="cursor-pointer dark:border border-2 dark:text-white text-[0.4rem] px-2 py-1 lg:text-[0.7rem] lg:px-2 lg:py-1 rounded-[5px]"
        >
          {{ stack }}
        </li>
      </ul>
    </div>
    <a
        href="https://drive.google.com/file/d/1vZH4bzfUdz-jUQ7ANKprGauWEyjxXuXa/view"
        class="w-full lg:mt-5 mt-3 text-center inline-block lg:py-2 py-1  bg-white text-black hover:opacity-[0.85] duration-300 hover:scale-[1.02] rounded-md font-[500] mb-7"
    >Download</a
    >
  </div>
</template>
<style scoped>
.contact > p, .contact > a {
  @apply flex items-center dark:text-gray-300 lg:text-[1rem] text-[0.8rem] gap-1;
}

*::selection {
  background-color: #9480FE;
  color: black;
}
</style>