<template>
  <transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 backdrop-blur flex items-center justify-center z-50">
      <div
        class="bg-[#1C191D]/75 flex flex-col gap-5 duration-500 ease-in-out rounded-xl backdrop-blur p-4"
        :class="!isFullScreen ? 'w-6/12' : 'w-full h-full'"
      >
        <div class="border-b pb-3 w-full flex gap-2">
          <span
            @click="closeModal"
            class="w-3 cursor-pointer text-[10px] text-red-400 hover:text-black rounded-full flex items-center h-3 justify-center bg-red-400"
          >
            x
          </span>
          <span
            class="w-3 cursor-not-allowed text-[10px] text-red-400 hover:text-black rounded-full flex items-center h-3 justify-center bg-gray-400"
          >
          </span>
          <span
            @click="isFullScreen = !isFullScreen"
            class="w-3 cursor-pointer text-[10px] text-transparent hover:text-black rounded-full flex items-center h-3 justify-center bg-green-500"
          >
            +
          </span>
        </div>
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Type a command or search..."
          class="w-full bg-transparent rounded-md outline-none border-none text-white font-biotif text-[1.1rem]"
        />
        <div v-show="filteredItems.length" class="flex !border-green-300 flex-col gap-3">
          <a href="#" v-for="item in filteredItems">
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref } from 'vue'

const { isOpen, items, closeModal } = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  closeModal: {
    type: Function,
    required: true
  }
})

const isFullScreen = ref(false)
const searchTerm = ref('')
const filteredItems = computed(() => {
  return items.filter((item) => item.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
})
</script>

<style scoped></style>
