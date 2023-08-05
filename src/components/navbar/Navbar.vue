<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div
		class="flex sticky top-0 backdrop-blur-sm items-center justify-between"
	>
		<Logo />
		<div class="lg:flex items-center gap-3 hidden p-3">
			<RouterLink to="/home"><NavLink> Home </NavLink> </RouterLink>

			<NavLink> About </NavLink>

			<NavLink> Blog </NavLink>

			<NavLink> Contact </NavLink>

			<NavLink> Resume </NavLink>

			<ThemeToggler class="text-2xl" />
		</div>
	</div>
</template>
<script setup>
import Logo from '../icons/Logo.vue'
import ThemeToggler from '../providers/ThemeToggler.vue'
import NavLink from './NavLink.vue'
</script>
<style></style>
