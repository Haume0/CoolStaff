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
  } else {
    $(":root").css("--scale", "1");
  }
});

$(window).resize(function () {
  let screenW = window.screen.width;
  let screenH = window.screen.height;
  if (screenW < screenH) {
    $(":root").css("--scale", "0.85");
  } else {
    $(":root").css("--scale", "1");
  }
});
</script>
<style></style>
