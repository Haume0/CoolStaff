<template>
    <div class="bg-csmain w-screen h-[calc(100vw+10rem)]">
        <div class="flex justify-center place-items-center w-screen h-screen">
            <div class="absolute w-[344px] h-[96px] flex items-center top-14">
                <img src="../assets/coolstaff.svg" class="absolute" />
                <span class="absolute font-Nunito font-extrabold text-4xl ml-28 text-[#fff]" >CoolStaff</span>
                <span class="absolute font-Nunito font-semibold text-base ml-28 mt-14">Cool and open sourced tools.</span>
            </div>
            <div class="absolute bg-[#fff] h-[1px] w-[700px] top-44"></div>
            <ul class="absolute flex w-[660px] justify-center top-48">
                <div id="foo" @click="goPG()" class="relative ml-0 bg-csside rounded-2xl w-60 h-56 border-solid border-[#444444] border-[2px] cshover ease-in-out delay-75 duration-150">
                    <img src="../assets/coolpg.svg" class="absolute w-28 h-28 top-[calc(50%-90px)] left-[calc(50%-96px/2)]" />
                    <div class="absolute w-24 h-8 bg-[#000]/70 csblur rounded-l-full right-0 top-4 flex justify-center place-items-center">
                        <span class="font-Nunito font-bold text-based text-[#62EF89]">Released</span>
                    </div>
                    <div class="absolute flex justify-center w-full h-[30%] rounded-b-2xl bottom-0 bg-csmain">
                            <span class="absolute w-[100%] text-center font-Nunito font-semibold text-base mt-2">Password Generator</span>
                            <span class="absolute w-[100%] text-center font-Nunito font-normal text-[12px] mt-8">A powerfull password generator.</span>
                    </div>
                </div>
                <div class="relative bg-csside rounded-2xl w-60 h-56 border-solid border-[#444444] border-[2px] ml-5 cshoverNO ease-in-out delay-75 duration-150">
                    <img src="../assets/coolgl.svg" class="absolute w-28 h-28 top-[calc(50%-90px)] left-[calc(50%-96px/2)]" />
                    <div class="absolute w-24 h-8 bg-[#000]/70 csblur rounded-l-full right-0 top-4 flex justify-center place-items-center">
                        <span class="font-Nunito font-bold text-sm text-[#EFB762]">Comin' Soon</span>
                    </div>
                    <div class="absolute flex justify-center w-full h-[30%] rounded-b-2xl bottom-0 bg-csmain">
                        <span class="absolute w-[100%] text-center font-Nunito font-semibold text-base mt-2">Gradient Library</span>
                        <span class="absolute w-[100%] text-center font-Nunito font-normal text-[11px] mt-8">Cool gradients for cool designs and arts.</span>
                    </div>
                </div>
                <div class="relative bg-csside rounded-2xl w-60 h-56 border-solid border-[#444444] border-[2px] ml-5 cshoverNO ease-in-out delay-75 duration-150">
                    <img src="../assets/coolwait.svg" class="absolute w-28 h-28 top-[calc(50%-90px)] left-[calc(50%-96px/2)]" />
                    <div class="absolute w-24 h-8 bg-[#000]/70 csblur rounded-l-full right-0 top-4 flex justify-center place-items-center">
                        <span class="font-Nunito font-bold text-sm text-[#EFB762]">Comin' Soon</span>
                    </div>
                    <div class="absolute flex justify-center w-full h-[30%] rounded-b-2xl bottom-0 bg-csmain">
                        <span class="absolute w-[100%] text-center font-Nunito font-semibold text-base mt-2">More cool stuffs coming!😎</span>
                        <span class="absolute w-[100%] text-center font-Nunito font-normal text-[11px] mt-8">Wait while we making more cool staffs.</span>
                    </div>
                </div>

            </ul>
        </div>
    </div>
</template>
<script setup>
import router from '../router';

    function goPG(){
        router.push({ path: '/pg'})
    }
</script>
<style></style>
