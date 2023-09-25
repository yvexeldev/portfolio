<script setup>
import {ref} from "vue";
import axios from 'axios';
import {toast} from "vue3-toastify";

const name = ref("")
const email = ref("")
const message = ref("")



const checkInputs = () => {
  let result = true;
  let empty_things = ""
  const IS_NAME_EMPTY = name.value === ""
  const IS_EMAIL_EMPTY = email.value === ""
  const IS_MESSAGE_EMPTY = message.value === ""
  if(IS_NAME_EMPTY) {
    empty_things += " Name"
    result = false
  }
  if(IS_EMAIL_EMPTY) {
    empty_things += " Email"
    result = false
  }
  if(IS_MESSAGE_EMPTY) {
    empty_things += " Message"
    result = false
  }
  empty_things += " should not be empty!"
  if(!result) {
    toast(empty_things.trim(), {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'dark',
      type: 'error',
      dangerouslyHTMLString: true,
      icon: ''
    }) // ToastOptions
    return result;
  }


  return true;
}

function  sendMessage() {
  if(!checkInputs()) {
    return;
  }
  const botToken = '6540893161:AAEMqjsAlp1UMVfnIKM86TFNlC4DK5ftLq0';
  const chatId = '5701146181';
  const messageText = '🆕 NEW MESSAGE!\n' +
      `Name: ${name.value}\n`+
      `Email: ${email.value}\n`+
      `Message: ${message.value}\n`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const params = { chat_id: chatId, text: messageText };

  axios.post(url, params)
      .then(response => {
        toast('Message sent successfully!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'dark',
          type: 'success',
          dangerouslyHTMLString: true,
          icon: ''
        });
        name.value = ""
        email.value = ""
        message.value = ""
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
}
</script>

<template>
<div class="my-20 flex flex-col">
  <h1
      class="text-5xl mb-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r via-green-400 from-blue-300 to-green-500"
  >
    Email me.
  </h1>
  <p class="font-biotif mb-[60px]  text-[#8E9BA8] text-[1rem] my-[20px]"><strong>I love chatting</strong> with software engineers, tech founders, students, and creators. <strong>I'm a busy person</strong>, so I can't promise that I'll reply to your email right away, but I'll try my best to respond in a timely manner.</p>
  <form @submit.prevent="" action="/" class="flex-col flex w-3/4">
    <h2 class="font-semibold text-2xl mb-2">
      Send an email
    </h2>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col">
        <label for="name" class="font-biotif text-[#8E9BA8] text-[12px] mb-1">NAME</label>
        <input v-model="name" type="text" id="name" name="name" class="outline-none bg-[#030303] text-white text-[13px] p-[10px] " placeholder="John Doe">
      </div>

      <div class="flex flex-col">
        <label for="email" class="font-biotif text-[#8E9BA8] text-[12px] mb-1">TELEGRAM USERNAME OR PHONE NUMBER</label>
        <input v-model="email" type="text" id="email" name="email" class="outline-none bg-[#030303] text-white text-[13px] p-[10px] " placeholder="@jprqjon">
      </div>

      <div class="flex flex-col">
        <label for="message" class="font-biotif text-[#8E9BA8] text-[12px] mb-1">MESSAGE</label>
        <textarea v-model="message" type="text" id="message" name="message" class="outline-none bg-[#030303] text-white text-[13px] h-20 p-[10px] " placeholder="How can I help you?"/>
      </div>

      <button @click="sendMessage" class="bg-white text-black rounded-md p-[10px] hover:opacity-[0.85] py-[5px] duration-300 text-[1rem]">Send</button>
    </div>
  </form>
</div>

</template>

<style scoped lang="css">
*::selection{
  background-color: #80FFE9;
  color: black;
}

input, textarea {
  @apply focus:border-green-300 border-[#8E9BA8]  border rounded-md
}
input:focus label {
  color: #4cd964;
}
strong {
  color: white;
}
p{
  line-height: 30px;
}
</style>