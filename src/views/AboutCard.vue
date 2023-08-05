<template>
	<div
		:style="{
			transform: cardTransform,
			transition: 'transform 0.25s ease-out'
		}"
		ref="target"
		class="card w-[30rem] min-h-[28.75rem] flex flex-col gap-3 rounded-md border border-primary"
	>
		<img class="w-full h-[25rem] rounded-t-md" src="/bg.png" alt="" />

		<div class="px-4 pb-2">
			<h1 class="dark:text-white text-dark text-[1.5rem] font-[500]">
				A'zam
			</h1>
			<h1 class="dark:text-gray-300 text-dark text-lg font-[400] mb-5">
				Learner | Builder
			</h1>

			<div class="icons flex flex-col gap-3">
				<h1
					class="flex items-center dark:text-gray-200 text-dark gap-2"
				>
					<!-- <Icon
							class="dark:text-white text-dark text-2xl"
							icon="carbon:"
						/> -->
					<Icon
						class="dark:text-gray-200 text-dark text-2xl"
						icon="uil:bag-alt"
					/>
					Self-Employed - Building Projects
				</h1>
				<h1
					class="flex items-center dark:text-gray-200 text-dark gap-2"
				>
					<Icon
						class="dark:text-gray-200 text-dark text-2xl"
						icon="carbon:location"
					/>
					Tashkent, Uzbekistan
				</h1>
				<a
					class="flex items-center dark:text-gray-200 text-dark gap-2"
					href="mailto:abdusalomovdev@gmail.com"
				>
					<Icon
						class="dark:text-gray-200 text-dark text-2xl"
						icon="mdi:email-outline"
					/>
					abdusalomovdev@gmail.com
				</a>
				<h1
					class="flex items-center dark:text-gray-200 text-dark gap-2"
				>
					<Icon
						class="dark:text-gray-200 text-dark text-2xl"
						icon="teenyicons:github-outline"
					/>
					<a
						class="hover:underline"
						href="https://github.com/ritnyxdev"
						>gh/abdusalomovdev</a
					>
				</h1>
			</div>
		</div>
		<span
			class="h-1.5 rounded-b-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
		></span>
	</div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
	useMouseInElement(target)

const cardTransform = computed(() => {
	const MAX_ROTATION = 15

	const rX = (
		MAX_ROTATION / 2 -
		(elementY.value / elementHeight.value) * MAX_ROTATION
	).toFixed(2)

	const rY = (
		(elementX.value / elementWidth.value) * MAX_ROTATION -
		MAX_ROTATION / 2
	).toFixed(2)

	return isOutside.value
		? ''
		: `perspective(500px) scale(1.1) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>
<style>
.shadow-3xl {
	box-shadow: 0px 0px 100px -15px rgb(162, 0, 255);
}
</style>
