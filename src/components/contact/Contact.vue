<script setup>
import { ref } from 'vue';

const name = ref('');
const message = ref('');
const phone_number = ref('');
const email = ref('');
</script>

<template>
    <div class='lg:mt-40 mt-20'>
        <div class=''>

            <div class='w-full items-center flex flex-col mb-10'>
                <h2
                    class='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 lg:text-7xl text-4xl font-bold'
                >
                    Just say Hello!
                </h2>
                <form
                    @submit.prevent=''
                    class='lg:[&>*]:px-3 [&>*]:p-3 lg:[&>*]:text-lg [&>*]:text-sm lg:[&>*]:py-4 [&>*]:dark:bg-gray-700  [&>*]:bg-gray-200 [&>*]:dark:text-white [&>*]:rounded-md lg:w-8/12 w-10/12 grid grid-cols-2 gap-4 [&>*]:border-none [&>*]:outline-none mt-7 lg:mt-14'
                >
                    <input type='text' v-model='name' placeholder='Your Name' class='col-span-2' />
                    <input
                        type='text'
                        v-model='phone_number'
                        placeholder='Your phone number'
                        class='lg:col-span-1 col-span-2'
                    />
                    <input type='text' v-model='email' placeholder='Your email' class='lg:col-span-1 col-span-2' />
                    <textarea v-model='message' placeholder='Your Message' class='col-span-2 h-32' />
                    <button type='submit' class='col-span-2 !bg-green-400 !py-2 hover:!bg-green-500 duration-300'>
                        Send
                    </button>
                </form>

            </div>
            <div class='px-8 mb-20'>
                <img src='/dev-art.png' alt='' class='lg:w-[55rem] w-full  rounded-md block mx-auto mb-10'>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
