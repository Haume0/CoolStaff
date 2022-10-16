1<template>
    <div class=" w-full flex flex-row gap-4 justify-center place-items-center h-[100vh]">
        <div ref="el" v-bind:style="{height: scroll + '%'}" class="absolute  top-0 w-full nwgr ease-in-out duration-[1400ms]"></div>
        <div @click="xRef(bignews.sLink,bignews.xLink)" :style="{background: 'url('+bignews.image+')'}" :class="anim" class="relative opacity-0 w-[720px] bps justify-center flex c-c bg-zinc-800 rounded-xl hover:outline-3 hover:outline hover:outline-zinc-200 p-2 outline-offset-[3px] h-[420px] hover:cursor-pointer ease-in-out duration-150">
            <div class="absolute w-full h-16 bg-black/40 backdrop-blur-[2px] bottom-0 flex justify-center place-items-center">
                <span class="absolute text-white text-base font-Poppins font-normal mx-2 my-2">{{bignews.content}}</span>
            </div>
            <div class="absolute left-0 top-0 bg-zinc-900 rounded-r-xl !rounded-t-none text-center text-white font-Poppins font-bold text-sm pt-[2px] px-3 py-1">{{bignews.source}}</div>
        </div>
        <div class="relative flex flex-col gap-4">
            <div  v-for="news in newses" @click="xRef(news.sLink,news.xLink)" :class="anim" class="relative opacity-0 fade_in_scroll_anim w-[556px] h-[128px] flex place-items-center c-c rounded-lg bg-zinc-800 hover:outline-3 hover:outline hover:outline-zinc-200 p-2 outline-offset-[3px] hover:cursor-pointer ease-in-out duration-150">
                <div :style="{background: 'url('+news.image+')'}" class="absolute nwdiv w-[35%] h-[128px] c-c right-0">
                    <div class="absolute right-0 bottom-0 bg-zinc-900 rounded-l-lg rounded-b-none text-center text-white font-Poppins font-bold text-sm pt-[2px] px-3 py-1">{{news.source}}</div>
                </div>
                <span class="absolute w-[65%] left-4 top-4 bottom-4 text-white text-base font-Poppins font-medium">{{news.content}}</span>
            </div>
        </div>
    </div> 
</template>
<script setup>
import { useWindowScroll } from '@vueuse/core'
import {reactive, ref} from 'vue'
function xRef(self,ext) {
    if(ext != ''){
        window.open(ext, '_blank');
    }else if(self != ''){
        window.open(self,'_self');
    }
}
 const { x, y } = useWindowScroll()
 let scroll = ref(0)
 let anim = ref('')
 window.addEventListener("scroll", function(e){
    if(y.value >= 450){
        anim.value = 'animate__animated animate__fadeInLeft opacity-100'
        scroll.value = 80
    }
});
let newses = reactive([
    {
        content: 'Now! Spica have a new website.',
        source: 'NEWS',
        image: '/src/assets/samurai.png',
        sLink: 'blog',
        xLink: '',
    },
    {
        content: 'Spica Launcher editor released,Update launcher easily.',
        source: 'RELEASE',
        image: '/src/assets/qzxiu-1qrxy4.preview.jpg',
        sLink: 'blog',
        xLink: '',
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        source: 'By Haume',
        image: '/src/assets/haber.png',
        sLink: 'blog',
        xLink: '',
    }
])
let bignews = reactive(
    {
        content: 'CoolStaff’s CoolProfile tool coming soon!',
        image: '/src/assets/samurai.png',
        source: 'CoolStaff',
        sLink: '',
        xLink: 'https://coolstaff.netlify.app/',
    }
)

</script>