1<template>
    <div class=" w-full h-[100vh] bg-[#222632] justify-center flex flex-wrap gap-6 place-items-center">
        <div :class="anim" v-for="prod in prods" @click="xRef('',prod.link)" @mouseover="slide(128,prod.id)" @mouseleave="slide(0,prod.id)"  ref="prodOne" class="relative hover:cursor-pointer opacity-0 w-[356px] h-[256px] rounded-xl text-white">
            <div :style="{background: 'url('+prod.image+')'}" class="absolute hover:cursor-pointer bps w-full z-[1] h-full rounded-xl bg-black"></div>
            <div :style="{transform: 'translateY('+prod.slide+'px)'}" class="absolute w-full ease-in-out -bottom-2 duration-500 h-[60%] rounded-b-2xl border-b-[8px] border-[#6500CD] bg-[#171A21]">
                <span class="absolute text-zinc-500 font-Poppins font-normal mx-4 max-h-[40%] top-7 overflow-hidden text-ellipsis text-sm text-left ">{{prod.lore}}</span>
                <div class="absolute flex flex-col right-2 bottom-3 max-w-[60%] max-h-[36px]">
                    <span class="relative text-zinc-500 font-Poppins font-normal  overflow-hidden text-ellipsis text-sm text-right">{{prod.detail}}</span>
                    <span class="relative text-zinc-500 font-Poppins font-normal  overflow-hidden text-ellipsis text-sm text-right">{{prod.version}}</span>
                </div>
            </div>
            <h1 :style="{transform: 'translateY('+prod.slide+'px)'}" class="absolute left-4 bottom-3 font-Comfortaa ease-in-out bg-black/60 px-2 py-[2px] rounded-full duration-500 font-bold text-lg ehe z-[2]">{{prod.name}}</h1>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useWindowScroll } from '@vueuse/core'

function xRef(self,ext) {
    if(ext != ''){
        window.open(ext, '_blank');
    }else if(self != ''){
        window.open(self,'_self');
    }
}
const { x, y } = useWindowScroll()
 let anim = ref('')
 window.addEventListener("scroll", function(e){
    if(y.value >= 1480){
        anim.value = 'animate__animated animate__fadeInDown opacity-100'
    }
});
let prods = reactive([
    {
        id: 0,
        name: 'CoolStaff',
        lore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        detail: 'Vue.js & Tailwindcss',
        version: 'v0.4.2-alpha',
        image: '/src/assets/coolsyt.png',
        link: 'https://coolstaff.netlify.app/',
        slide: ''
    },
    {
        id: 1,
        name: 'Launcherer',
        lore: 'Launcher customizer for our customers. Change theme, modpacks etc easily.',
        detail: 'ElectronJS, VueJS & Firebase',
        version: 'v0.4.4-Beta',
        image: 'https://store-images.s-microsoft.com/image/apps.41394.14247769038588514.c32b7f8c-cb4d-4859-a2a8-4c02692f8838.7fe17e57-47cc-4b63-91e7-946616fc6908?q=90&w=480&h=270',
        link: 'https://nolur.com/',
        slide: ''
    },
    {
        id: 2,
        name: 'PyLauncher',
        lore: 'Multifunctional Minecraft Launcher written in Python',
        detail: 'Python 3 & PyQt',
        version: 'v0.2',
        image: '/src/assets/pylauncher.png',
        link: 'https://github.com/MiateOfficial/PyLauncher',
        slide: ''
    },
])
let slideValue = ref()
function slide(arg1,id){
    prods[id].slide = arg1
}
</script>
<style>
</style>