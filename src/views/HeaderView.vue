<template>
	<div class="flex mt-[10rem] gap-20 justify-between items-center">
		<div class="w-[45rem] dark:text-gray-100">
			<h1 class="font-black font-mono text-5xl max-w-[30rem]">
				Hello, I'm Abdusalomov A'zam
			</h1>
			<p class="text-lg mt-6 w-[45rem]">
				I'm <span class="font-[600]">A'zam</span> - an open-minded
				Software Engineer in 🇺🇿
			</p>
			<p class="text-lg mt-3 w-[32rem]">
				I live in <span class="font-[600]">Tashkent, Uzbekistan</span>
			</p>
			<p class="text-lg mt-3 w-[32rem]">
				I started my coding journey in 2020 with C++ at school. I'm in
				love with the JS ecosystem, web dev, and eCommerce. I created
				this blog to write what I have learned.
			</p>
			<a href="https://payme.uz"
				class="bg-primary inline-block text-white hover:bg-primary-hover duration-300 text-lg font-semibold mt-6 rounded-md px-6 py-3"
			>
				Say hello
			</a>
		</div>
		<div class="min-w-1/2">
			<AboutCard />
		</div>
	</div>
</template>
<script setup>
import AboutCard from './AboutCard.vue'
</script>
<style></style>
