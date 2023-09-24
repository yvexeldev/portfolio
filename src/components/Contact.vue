<script setup>

</script>

<template>
<div class="my-20 flex flex-col">
  <h1
      class="text-5xl mb-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r via-green-400 from-blue-300 to-green-500"
  >
    Email me. Like in the old days.
  </h1>
  <p class="font-biotif mb-[60px]  text-[#8E9BA8] text-[1rem] my-[20px]"><strong>I love chatting</strong> with software engineers, tech founders, students, and creators. <strong>I'm a busy person</strong>, so I can't promise that I'll reply to your email right away, but I'll try my best to respond in a timely manner.</p>
  <div class="flex-col flex w-3/4">
    <h2 class="font-semibold text-2xl mb-2">
      Send an email
    </h2>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col">
        <label for="name" class="font-biotif text-[#8E9BA8] text-[12px] mb-1">NAME</label>
        <input type="text" id="name" name="name" class="outline-none bg-[#030303] text-white text-[13px] p-[10px] " placeholder="John Doe">
      </div>

      <div class="flex flex-col">
        <label for="email" class="font-biotif text-[#8E9BA8] text-[12px] mb-1">EMAIL</label>
        <input type="email" id="email" name="email" class="outline-none bg-[#030303] text-white text-[13px] p-[10px] " placeholder="johndoe@gmail.com">
      </div>

      <div class="flex flex-col">
        <label for="message" class="font-biotif text-[#8E9BA8] text-[12px] mb-1">MESSAGE</label>
        <textarea type="text" id="message" name="message" class="outline-none bg-[#030303] text-white text-[13px] h-20 p-[10px] " placeholder="How can I help you?"/>
      </div>

      <button class="bg-white text-black rounded-md p-[10px] hover:opacity-[0.85] py-[5px] duration-300 text-[1rem]">Send</button>
    </div>
  </div>
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
strong {
  color: white;
}
p{
  line-height: 30px;
}
</style>