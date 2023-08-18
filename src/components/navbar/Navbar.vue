<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        class="flex border-b dark:border-white items-center lg:justify-around justify-between lg:pt-2 lg:pb-0 lg:px-6 pt-3 pb-3 px-6 overflow-x-hidden backdrop-blur supports-backdrop-blur:bg-white/95 sticky top-0 z-40 bg-white/75 dark:bg-dark/75"
    >
        <Logo />
        <Icon
            v-if="!showMenu"
            icon="ci:hamburger-md"
            class="lg:hidden dark:text-white text-gray-900 text-2xl"
            @click="showMenu = true"
        />
        <Icon
            v-else
            icon="ci:close-md"
            class="lg:hidden dark:text-white text-gray-900 text-2xl"
            @click="showMenu = false"
        />

        <div class="lg:flex items-center gap-3 hidden p-3" :class="{ 'max-w-screen-sm': showMenu }">
            <NavLink to="/"> Home </NavLink>


            <NavLink to="blog"> Blog </NavLink>

            <NavLink to="contact"> Contact </NavLink>

            <NavLink to="resume"> Resume </NavLink>

            <ThemeToggler class="text-2xl" />
        </div>
    </div>
    <div
        v-show="showMenu"
        class="flex fixed justify-center items-center z-[39] top-0 w-screen h-screen flex-col gap-4 overflow-x-hidden backdrop-blur supports-backdrop-blur:bg-white/95 bg-white/75 dark:bg-dark/75"
    >
        <NavLink @click="showMenu = false" to="/"> Home </NavLink>

        <NavLink @click="showMenu = false" to="blog"> Blog </NavLink>

        <NavLink @click="showMenu = false" to="contact"> Contact </NavLink>

        <NavLink @click="showMenu = false" to="resume"> Resume </NavLink>

        <ThemeToggler @click="showMenu = false" class="text-2xl" />
    </div>
</template>
<script setup>
import Logo from '../icons/Logo.vue';
import ThemeToggler from '../../providers/ThemeToggler.vue';
import NavLink from './NavLink.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const showMenu = ref(false);
</script>
<style></style>
