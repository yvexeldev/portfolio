<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="lg:mb-4 mb-3">
        <div class="flex items-center justify-center gap-3 lg:text-3xl text-xl">
            <a href="https://github.com/abdusalomovdev">
                <Icon
                    icon="mdi:github"
                    class="dark:hover:text-primary hover:text-primary duration-300 dark:text-white text-gray-700"
                />
            </a>

            <a href="https://t.me/abdusalomovdev">
                <Icon
                    icon="ic:baseline-telegram"
                    class="dark:hover:text-primary hover:text-primary duration-300 dark:text-white text-gray-700"
                />
            </a>
            <a href="https://instagram.com/abdusalomovdev">
                <Icon
                    icon="mdi:instagram"
                    class="dark:hover:text-primary hover:text-primary duration-300 dark:text-white text-gray-700"
                />
            </a>
            <a href="mailto:abdusalomovdev@gmail.com">
                <Icon
                    icon="material-symbols:mail"
                    class="dark:hover:text-primary hover:text-primary duration-300 dark:text-white text-gray-700"
                />
            </a>
        </div>
        <p class="text-center dark:text-white lg:text-[15px] mt-1 text-[10px]">
            Copyright © {{ new Date().getFullYear() }} • A'zam's blog - A'zam's coding journey
        </p>
    </div>
</template>

<style scoped></style>
