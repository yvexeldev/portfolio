<script setup>
const currentRoute = window.location.href.split('http://localhost:5173')[1]
const color =
  currentRoute === '/'
    ? 'text-violet-400'
    : currentRoute === '/about'
    ? 'text-green-400'
    : currentRoute === '/resume'
    ? 'text-yellow-400'
    : currentRoute === '/contact'
    ? 'text-blue-400'
    : currentRoute === '/reminder'
    ? 'text-orange-400'
    : 'text-violet-400'
console.log(currentRoute)
</script>

<template>
  <a
    class="font-semibold p-2 font-biotif md:text-3xl lg:text-2xl sm:text-xs duration-300 inline-block"
    href="/"
  >
    <span>
      <i :class="color">yv</i>ex<span :class="color">el</span
      ><span class="md:text-[15px] lg:text-[10px] sm:text-[5px]">.dev</span>
    </span>
  </a>
</template>

<style scoped lang="css"></style>
