<script setup>
import { heroSection } from '@/constants'
</script>

<template>
  <div class="ml-[10px]">
    <h1 class="font-semibold fullname cursor-default font-neuzerit md:text-5xl inline-block mt-60 mb-[20px]">
      {{ heroSection.full_name }}
    </h1>
    <p class="font-biotif text-[1rem] my-[20px] flex flex-col gap-4">
      {{ heroSection.job_title }}
      <span class="text-[#8E9BA8]">
        {{ heroSection.description }}
      </span>
    </p>
  </div>
  <button
    @click="console.log('Clicked')"
    class="px-[10px] font-biotif font-bold py-[10px] rounded-md duration-300 ease-in-out hover:bg-[#212024]"
  >
    Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
  </button>

  <!--  <CommandMenu :close-modal="closeModal" :items="items" :is-open="isOpen"/>-->
</template>

<style scoped lang="css">
kbd {
  @apply bg-[#8E9BA8] px-2 py-1 rounded text-black font-thin;
}

*::selection {
  background-color: rgb(156, 129, 236);
}

.fullname::after {
    //margin: ;
    content: '';
    display: block;
    width: 65%;
    height: 3px;
    background: rgb(128, 96, 224);
    transition: width 0.3s;
}

.fullname:hover::after {
  width: 100%;
}
</style>
