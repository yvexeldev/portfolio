<script setup>
import { Icon } from '@iconify/vue'
import Logo from '@/ui/Logo.vue'
import { navLinks } from '@/constants'
import Button from '@/ui/Button.vue'
</script>

<template>
  <div>
    <nav class="mt-3 flex items-center justify-between px-5">
      <Logo />
      <ul class="flex gap-5">
        <RouterLink v-for="(link, index) in navLinks" :key="link.title" :to="link.link">
          <Button class="text-[12px] uppercase tracking-wider link text-[#8E9BA8]">
            {{ link.title }}
          </Button></RouterLink
        >
      </ul>
      <Button class="text-[20px] cursor-pointer"><Icon icon="ri:command-line" /></Button>
    </nav>
  </div>
  <!--  <CommandMenu :close-modal="closeModal" :items="items" :is-open="isOpen"/>-->
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
.active > p {
  color: white;
}
.active > p::after {
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
