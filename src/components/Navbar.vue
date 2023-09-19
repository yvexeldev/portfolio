<script setup>
import { Icon } from '@iconify/vue'
import Logo from '@/ui/Logo.vue'
import { navLinks } from '@/constants'
import Button from '@/ui/Button.vue'
import {onBeforeUnmount, onMounted, ref} from "vue";
import CommandMenu from "@/components/CommandMenu.vue";

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
    isOpen.value = !isOpen.value
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
  <div>
    <nav class="mt-3 flex items-center justify-between px-5">
      <Logo />
      <ul class="flex gap-5">
        <RouterLink v-for="(link, index) in navLinks" :key="link.title" :to="link.link">
          <Button
            class="text-[12px] tracking-wider link text-[#8E9BA8]"
            :class="index === 0 ? 'active' : ''"
          >
            {{ link.title }}
          </Button></RouterLink
        >
      </ul>
      <Button @click="openModal" class="text-[20px] cursor-pointer"
        ><Icon icon="ri:command-line"
      /></Button>
    </nav>
  </div>
  <CommandMenu :close-modal="closeModal" :items="items" :is-open="isOpen"/>
</template>

<style scoped lang="css">
.link::after {
  margin: 0 auto;
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: white;
  transition: width 0.3s;
}
.active {
  color: white;
}
.active::after {
  width: 20px;
}
.link:hover {
  color: white;
}

.link:hover::after {
  width: 20px;
  //transition: width 0.3s;
}
</style>
