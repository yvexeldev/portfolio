<template>
  <div class="flex flex-col h-screen">
    <div>
      <Navbar />
    </div>
    <div class="container lg:px-[13rem] flex-1">
      <RouterView />
    </div>
    <div class="mt-auto">
      <Footer class="flex justify-center mb-5" />
    </div>
  </div>
</template>

<script setup>
import { Navbar, Footer } from '@/components'
</script>

<style lang="css" scoped>
input::placeholder {
  color: #6d6c6c;
}
</style>
