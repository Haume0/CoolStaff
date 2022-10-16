<template>
    <div class=" w-full h-[100vh] mt-[120px] flex justify-center place-items-center">
        <img src="/src/assets/light.svg" class="absolute -ml-[956px] -top-[720px] blur-[128px]"/>
        <div class="absolute w-full h-[800px] inline-flex flex-row justify-center place-items-center">
            <div class="relative inline-flex flex-col gap-2 max-w-[700px] justify-center mb-44 text-start">
                <h1 class="relative font-Poppins font-black text-white text-[44px]"><mark>Spica Team.</mark></h1>
                <h2 class="relative font-Poppins font-bold text-white text-[36px]">Interstellar developer team!</h2>
                <span class="relative font-Poppins font-normal text-[#9090A7] text-[22px]">Get ready for a stroll among the stars. Inspiring open source projects, projects we do for our clients and more.</span>
                <div class="flex flex-row gap-4 mx-0">
                    <div @click="Sref('#prod')" class="relative w-36 h-10 br3 rounded-full noslc hover:cursor-pointer bg-sbtn"><img src="/src/assets/prod.svg" class="absolute top-[calc(50%-18px/2)] ml-3"><span class="absolute right-4 font-SourceSansPro font-normal top-[calc(50%-20px/2)] text-white text-sm">Our Products</span></div>
                    <div id="com" @click="Sref('community')" class="relative w-32 h-10 br4 rounded-full noslc hover:cursor-pointer bg-sbtn"><img src="/src/assets/heart.svg" class="absolute top-[calc(50%-18px/2)] ml-3"><span class="absolute right-4 font-SourceSansPro font-normal top-[calc(50%-20px/2)] text-white text-sm">Community</span></div>
                </div>
            </div>
            <img src="/src/assets/spica_logo_gradient.svg" class="relative flex mb-44 w-auto noslc h-auto">
        </div>
    </div>
</template>
<script setup>
import router from '../router'
function Xref(arg1) {
    window.open("https://" + arg1, '_blank');
}
function Sref(arg1) {
    window.open(arg1,'_self');
}
</script>