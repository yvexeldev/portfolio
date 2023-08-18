<script setup>
import { useToggle, useDark } from '@vueuse/core'
import { Icon } from '@iconify/vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
	<div
		@click="toggleDark()"
		class="px-3 text-2xl py-2 flex items-center rounded-md cursor-pointer dark:text-white text-dark dark:hover:bg-gray-700 duration-300 hover:bg-gray-200"
	>
		<Icon
			:icon="isDark ? 'carbon-sun' : 'carbon-moon'"
			class="dark:text-white"
		/>
	</div>
</template>
