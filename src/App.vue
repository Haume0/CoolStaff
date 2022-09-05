<template>
  <router-view />
</template>
<script setup>   
import { ref } from "vue";
import $ from "jquery";
$(document).ready(function () {
  let screenS = window.screen.width;
  if (screenS <= 1080) {
    $(":root").css("--scale", "0.85");
    console.log(screenS);
  } else {
    $(":root").css("--scale", "1");
    console.log(screenS);
  }
});

$(window).resize(function () {
  let screenS = window.screen.width;
  if (screenS <= 1080) {
    $(":root").css("--scale", "0.85");
    console.log(screenS);
  } else {
    $(":root").css("--scale", "1");
    console.log(screenS);
  }
});
</script>
<style></style>
