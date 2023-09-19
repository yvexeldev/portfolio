<script setup>
import { footerLinks } from '@/constants'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <footer>
      <ul class="flex gap-5">
        <li v-for="link in footerLinks" :key="link.title">
          <a
            :href="link.link"
            class="flex text-[#8E9BA8] items-center duration-300 hover:text-white justify-center gap-1"
          >
            {{ link.title }}
            <Icon :icon="link.icon" class="text-black icon" />
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped lang="css">
.icon {
  font-size: 20px;
}
a:hover .icon {
  transition: 0.3s;
  color: white;
}
</style>
