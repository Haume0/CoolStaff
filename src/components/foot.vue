1<template>
    <div class="absolute w-full h-[128px] bg-black flex justify-center">
        <div class="absolute w-[95vw] h-full flex place-items-center">
            <div class="absolute left-4 flex flex-row place-items-center">
                <img src="/src/assets/SpicaLogo_small.svg" class="relative">
                <div class="relative ml-4 flex flex-col">
                    <span class="relative text-white text-[20px] font-Comfortaa font-bold">Spica<span class="text-white text-[20px] font-Comfortaa font-light">Team</span></span>
                    <span class="relative text-zinc-400 text-[16px] font-Poppins font-light">© 2022 | All Rights Reserved.</span>
                    <span @click="xRef('pp','')" class="relative text-zinc-400 text-[16px] font-Poppins font-light underline hover:cursor-pointer lglow">Privacy Policy</span>
                </div>
            </div>
            <a href="#" class="absolute right-4 flex flex-row gap-2 place-items-center lglow">
                <span class="relative text-white text-[16px] font-Poppins font-bold">Return the surface</span>
                <img src="/src/assets/up_arrow.svg" class="relative">
            </a>
        </div>
    </div>
</template>
<script setup>
import router from '../router'
function xRef(self,ext) {
    if(ext != ''){
        window.open(ext, '_blank');
    }else if(self != ''){
        window.open(self,'_self');
    }
}
</script>