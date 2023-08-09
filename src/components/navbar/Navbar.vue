<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        class="flex shadow dark:shadow-white items-center justify-around overflow-x-hidden backdrop-blur supports-backdrop-blur:bg-white/95 sticky top-0 z-40 bg-white/75 dark:bg-dark/75"
    >
        <Logo />
        <div class="lg:flex items-center gap-3 hidden p-3">
            <NavLink to="/"> Home </NavLink>

            <NavLink to="about"> About </NavLink>

            <NavLink to="blog"> Blog </NavLink>

            <NavLink to="contact"> Contact </NavLink>

            <NavLink to="resume"> Resume </NavLink>

            <ThemeToggler class="text-2xl" />
        </div>
    </div>
</template>
<script setup>
import Logo from '../icons/Logo.vue';
import ThemeToggler from '../providers/ThemeToggler.vue';
import NavLink from './NavLink.vue';
</script>
<style></style>
