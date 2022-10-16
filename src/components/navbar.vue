<template>
    <nav class=" w-[90vw] h-[120px] inline">
        <img @click="rout('/')" src="../assets/spica_texed_logo.svg" class="absolute top-[calc(50%-40px/2)] left-20 hover:cursor-pointer">
        <div class="absolute right-20 top-[calc(50%-40px/2)] flex flex-row-reverse gap-3 place-items-center">
            <div class="relative flex flex-row gap-6">
                <div class="relative h-10 w-[2px] bg-white"></div>
                <div @click="Xref('discord.gg/hCBrqtuZ89')" class="relative inline w-40 h-10 br1 rounded-full noslc hover:cursor-pointer bg-sbtn"><img src="../assets/discord.svg" class="absolute top-[calc(50%-18px/2)] ml-3"><span class="absolute right-4 font-SourceSansPro font-normal top-[calc(50%-20px/2)] text-white text-sm">Join our Discord</span></div>
                <div @click="Xref('github.com/SpicaDev')" class="relative inline w-44 h-10 br2 rounded-full noslc hover:cursor-pointer bg-sbtn"><img src="../assets/github.svg" class="absolute top-[calc(50%-20px/2)] ml-3"><span class="absolute right-3 top-[calc(50%-20px/2)] font-SourceSansPro font-normal text-white text-sm">Follow us on Github</span></div>
            </div>
            <div @click="Sref('community')" class="relative sm:hidden md:hidden lg:inline w-[104px] h-[25px] nav flex justify-center noslc place-items-center rounded-[10px]"><span class="Absolute font-bold font-SourceSansPro text-white text-base">Community</span></div>
            <div @click="Sref('/community/#team')" class="relative sm:hidden md:hidden lg:inline w-[50px] h-[25px] nav flex justify-center noslc place-items-center rounded-[10px]"><span class="Absolute font-bold font-SourceSansPro text-white text-base">Team</span></div>
            <div @click="Sref('#prod')" class="relative sm:hidden md:hidden lg:inline w-[82px] h-[25px] nav flex justify-center noslc place-items-center rounded-[10px]"><span class="Absolute font-bold font-SourceSansPro text-white text-base">Products</span></div>
            <div @click="Sref('/blog')" class="relative sm:hidden md:hidden lg:inline w-[42px] h-[25px] nav flex justify-center noslc place-items-center rounded-[10px]"><span class="Absolute font-bold font-SourceSansPro text-white text-base">Blog</span></div>
            <div @click="Sref('/')" class="relative sm:hidden md:hidden lg:inline w-[54px] h-[25px] nav flex justify-center noslc place-items-center rounded-[10px]"><span class="Absolute font-bold font-SourceSansPro text-white text-base">Home</span></div>
        </div>
    </nav>
</template>
<script setup>
function Xref(arg1) {
    window.open("https://" + arg1, '_blank');
}
function Sref(arg1) {
    window.open(arg1,'_self');
}
</script>