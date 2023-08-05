<script setup>
import Navbar from './components/navbar/Navbar.vue'
import Layout from './components/providers/Layout.vue'
import HeaderView from './views/HeaderView.vue'
</script>

<template>
	<Layout>
		<Navbar />
		<RouterView />
	</Layout>
</template>

<style scoped></style>
