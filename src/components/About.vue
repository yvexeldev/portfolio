<script setup>
import '@/assets/toastify.css'
import useClipboard from 'vue-clipboard3'
import { toast } from 'vue3-toastify'
import {career} from "@/constants";

const { toClipboard } = useClipboard()
const notify = () => {
  toast('<h1>Copied :3 </h1><p class="text-[12px]">Now you can paste and use it )</p>', {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: 'dark',
    type: 'success',
    dangerouslyHTMLString: true,
    icon: ''
  }) // ToastOptions
}
const copy = async () => {
  try {
    await toClipboard(
      "A'zam Abudsalomov is an Uzbek programmer proficient in front-end, back-end, and software development. He eschews defining himself solely by past achievements, preferring instead to identify with the work he aspires to undertake. He believes that while skills can be acquired, one's personality is an innate trait. A'zam is committed to perpetual learning, consistently seeking out challenges and engaging in meaningful pursuits. His boundless energy propels him towards a diverse array of interests, hobbies, academic pursuits, and artistic ventures. With a knack for rapid assimilation, he excels in acquiring new skills and adeptly managing various projects and roles."
    )
    notify()
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="mt-20">
    <div class="">
      <h1
        class="text-5xl  mb-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
      >
        Create. Share. Repeat.
      </h1>
      <h2 class="mt-[60px] text-[24px] font-bold font-biotif">Bio</h2>
      <blockquote class="border-l-[4px] pl-[20px] border-[#8E9BA8]">
        <p class="my-[20px] italic text-[#8E9BA8] font-biotif text-[16px]">
          A'zam Abudsalomov is an Uzbek programmer proficient in front-end, back-end, and software
          development. He eschews defining himself solely by past achievements, preferring instead
          to identify with the work he aspires to undertake. He believes that while skills can be
          acquired, one's personality is an innate trait. A'zam is committed to perpetual learning,
          consistently seeking out challenges and engaging in meaningful pursuits. His boundless
          energy propels him towards a diverse array of interests, hobbies, academic pursuits, and
          artistic ventures. With a knack for rapid assimilation, he excels in acquiring new skills
          and adeptly managing various projects and roles.
        </p>
      </blockquote>
    </div>

    <button @click="copy" class="font-semibold font-biotif text-[#8E9BA8] hover:text-white mt-[20px]5  duration-300">
      Copy Bio <span class="opacity-0 duration-500">📋</span>
    </button>

    <h1 class="font-biotif mt-[60px] font-semibold text-2xl">Career</h1>
    <ul class="mt-[20px] mb-[10vh]">
      <li v-for="job in career" :key="job.job" class="mt-[20px] justify-center flex flex-col gap-2">
        <h3 class="font-semibold text-[18px] font-biotif">{{job.job}}</h3>
        <div class=" gap-2">
          <a class="text-[16px] font-biotif text-[#8E9BA8] hover:text-white duration-300" :href="job.company_link">{{job.company_name}}</a>
          <span class="text-[#8E9BA8] font-biotif"> - {{job.address}}</span>
        </div>
        <h3 class="text-[16px] flex gap-3 font-biotif text-[#8E9BA8]"><span>{{job.from}}</span>-<span>{{job.to}}</span>|<span>{{job.mos}}</span></h3>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
*::selection {
  @apply bg-pink-400 text-black;
}

blockquote > p {
  line-height: 32px;
}

button:hover span {
  opacity: 1;
}

button::after {
//margin: ;
  content: '';
  width: 65%;
  display: block;
  height: 1.5px;
  background: rgb(128, 96, 224);
  transition: width 0.3s;
}

button::before {
//margin: ;
  content: '';
  width: 65%;
  float: right;
  display: block;
  height: 1.5px;
  background: rgb(128, 96, 224);
  transition: width 0.3s;
}

button:hover::after {
  width: 100%;
}

button:hover::before {
  width: 100%;
}
</style>
