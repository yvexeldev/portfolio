<script setup>
import { heroSection } from '@/constants'
import {onBeforeUnmount, onMounted, ref} from "vue";
import {CommandMenu} from "@/components";

const isOpen = ref(false)

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
])

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const handleKeyPress = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
  if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
    openModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<template>
  <div class="ml-[10px]">
    <h1 class="font-semibold md:text-5xl inline-block mt-60 mb-[20px]">
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
    @click="openModal"
    class="px-[10px] font-biotif font-bold py-[10px] rounded-md duration-300 ease-in-out hover:bg-[#212024]"
  >
    Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
  </button>

  <CommandMenu :close-modal="closeModal" :items="items" :is-open="isOpen"/>
</template>

<style scoped lang="css">
kbd {
  @apply bg-[#8E9BA8] px-2 py-1 rounded text-black font-thin;
}

*::selection {
  background-color: rgb(156, 129, 236);
}
</style>
