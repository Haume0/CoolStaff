<template>
    <div class="absolute w-[100%] flex flex-col bg-SPmain place-items-center">
        <Navbar id="" class="absolute z-10"/>
        <Content id="content" class="relative"/>
        <News class="relative"/>
        <Prod id="prod" class="relative"/>
        <foot class="relative"/>
    </div>
</template>
<script setup>
import Navbar from '../components/navbar.vue';
import Content from '../components/content.vue';
import router from '../router'
import News from '../components/news.vue';
import Prod from '../components/prod.vue';
import foot from '../components/foot.vue';
function rout(arg1){
    router.push(arg1,arg2)
}
</script>
<style></style>
