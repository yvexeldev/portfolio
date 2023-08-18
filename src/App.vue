<script setup>
import Navbar from '@/components/navbar/Navbar.vue';
import Layout from '@/providers/Layout.vue';
import Footer from '@/views/Footer.vue';

</script>

<template>
    <Navbar />

    <Layout>
        <RouterView />
        <Footer />
    </Layout>
</template>

<style scoped></style>
