<template>
  <div class="w-screen h-screen">
    <div
      id="foo"
      @click="$router.back()"
      class="
        absolute
        cshover-2
        w-14
        h-14
        bg-csside
        ml-8
        mt-8
        rounded-full
        flex
        justify-center
        place-items-center
      "
    >
      <img src="../assets/back.svg" alt="" class="absolute mb-1" />
    </div>
    <input
      type="text"
      v-model="password"
      readonly
      id="sifre"
      class="absolute opacity-0 -top-full -left-full w-[1px] h-0"
    />
    <div class="flex justify-center place-items-center w-screen h-screen">
      <div
        class="
          absolute
          w-96
          h-20
          bg-csside
          rounded-lg
          flex
          place-items-center
          justify-center
        "
      >
        <div
          class="absolute w-[444px] h-36 -bottom-[210px] flex justify-center"
        >
          <div class="absolute flex w-[444px] h-[2px] bg-csside"></div>
          <span
            class="
              absolute
              flex
              font-Nunito font-normal
              top-2
              text-left
              w-96
              left-3
            "
            >CoolStaff ©️ 2022 <br />This project is open sourced and free to
            use. Logos, icons and brandnames are belong to us!</span
          >
          <ul class="absolute flex w-60 h-8 justify-start left-3 bottom-0 pl-0">
            <a target="_blank" href="https://discord.com/invite/hCBrqtuZ89">
              <img
                class="relative w-8 h-8 cursor-pointer"
                src="../assets/discord.svg"
                alt=""
              />
            </a>
            <a target="_blank" href="https://github.com/Haume0">
              <img
                class="relative w-8 h-8 ml-2 cursor-pointer"
                src="../assets/github.svg"
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.behance.net/emineroban">
              <img
                class="relative w-8 h-8 ml-2 cursor-pointer"
                src="../assets/behance.svg"
                alt=""
              />
            </a>
            <img
              class="relative w-8 h-8 ml-2 cursor-pointer opacity-60"
              src="../assets/linkedin.svg"
              alt=""
            />
            <a target="_blank" href="https://twitter.com/Haume0">
              <img
                class="relative w-8 h-8 ml-2 cursor-pointer"
                src="../assets/twitter.svg"
                alt=""
              />
            </a>
          </ul>
        </div>
        <div class="absolute w-[404px] h-[36px] -right-2 top-24 select-none">
          <div
            id="foo"
            @click="VN"
            class="
              absolute
              w-32
              h-9
              bg-csside
              rounded-full
              cursor-pointer
              hover:brightness-200
              cshover-2
            "
          >
            <div
              id="nmbr"
              class="
                absolute
                w-[18px]
                h-[18px]
                left-[9px]
                top-[9px]
                rounded-full
                ease-in
                duration-200
                delay-100
                bg-cspink
              "
            ></div>
            <span
              class="
                absolute
                font-Nunito
                w-[92px]
                h-[19px]
                right-[9px]
                top-[6px]
                text-center
              "
              >Numbers</span
            >
          </div>
          <div
            id="foo"
            @click="VU"
            class="
              absolute
              w-32
              h-9
              bg-csside
              right-0
              rounded-full
              cursor-pointer
              cshover-2
            "
          >
            <div
              id="upr"
              class="
                absolute
                w-[18px]
                h-[18px]
                left-[9px]
                top-[9px]
                rounded-full
                ease-in
                duration-200
                delay-100
                bg-cspink
              "
            ></div>
            <span
              class="
                absolute
                font-Nunito
                w-[92px]
                h-[19px]
                right-[9px]
                top-[6px]
                text-center
              "
              >Upper Case</span
            >
          </div>
          <div
            id="foo"
            @click="VS"
            class="
              absolute
              w-32
              h-9
              bg-csside
              top-0
              left-[138px]
              rounded-full
              cursor-pointer
              cshover-2
            "
          >
            <div
              id="sym"
              class="
                absolute
                w-[18px]
                h-[18px]
                left-[9px]
                top-[9px]
                rounded-full
                ease-in
                duration-200
                delay-100
                bg-cspink
              "
            ></div>
            <span
              class="
                absolute
                font-Nunito
                w-[92px]
                h-[19px]
                right-[9px]
                top-[6px]
                text-center
              "
              >Symbols</span
            >
          </div>
        </div>
        <span id="ekran" class="shd absolute font-Nunito font-bold text-2xl">{{
          password
        }}</span>
        <div class="absolute shd w-96 h-20"></div>
        <div class="copi">
          <button
            id="copybtn"
            v-on:click="vcopy()"
            class="
              absolute
              w-7
              h-7
              right-2
              top-2
              bg-no-repeat
              opacity-70
              active:opacity-100
              ease-in
              duration-200
              delay-100
              copbg
            "
          ></button>
          <button
            id="refbtn"
            v-on:click="gen()"
            class="
              absolute
              w-7
              h-7
              left-2
              top-2
              bg-no-repeat
              opacity-70
              active:opacity-100
              refbg
            "
          ></button>
        </div>
      </div>
      <div class="absolute w-[344px] h-[96px] mb-44 mr-10">
        <img
          class="relative w-20 h-20 mb-4"
          src="../assets/coolpg.svg"
          alt=""
        />
        <span class="absolute font-Nunito font-semibold text-base mt-14 ml-4"
          >Password Generator</span
        >
        <span class="absolute font-Nunito font-bold text-3xl ml-4 mt-5"
          >CoolStaff's</span
        >
      </div>
    </div>
  </div>
</template>
  <script setup>
import { ref } from "vue";
import $ from "jquery";
let password = ref("none");
function VN() {
  if (BN == true) {
    BN = false;
    $("#nmbr").removeClass(" bg-csblue");
  } else if (BN == false) {
    BN = true;
    $("#nmbr").addClass(" bg-csblue");
  }
  selects();
}
function VU() {
  if (BU == true) {
    BU = false;
    $("#upr").removeClass(" bg-csblue");
  } else if (BU == false) {
    BU = true;
    $("#upr").addClass(" bg-csblue");
  }
  selects();
}
function VS() {
  if (BS == true) {
    BS = false;
    $("#sym").removeClass(" bg-csblue");
  } else if (BS == false) {
    BS = true;
    $("#sym").addClass(" bg-csblue");
  }
  selects();
}
function gen() {
  generate();
  selects();
}
function vcopy() {
  copy();
}
function copy() {
  document.querySelector("#sifre").select();
  document.execCommand("copy");
  $("#copybtn").addClass("copedbg");
}
const lwrCase = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "ı",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
const uprCase = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
const nmbr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symb = [
  "!",
  "#",
  "$",
  "½",
  "&",
  "+",
  "-",
  "_",
  "/",
  ";",
  ":",
  ".",
  ",",
  "@",
  "?",
  "~",
];
const hm = [];
let L = hm.concat(lwrCase);
let LU = hm.concat(lwrCase.concat(uprCase));
let LN = hm.concat(lwrCase.concat(nmbr));
let LS = hm.concat(lwrCase.concat(symb));
let LNS = hm.concat(lwrCase.concat(symb.concat(nmbr)));
let LUN = hm.concat(lwrCase.concat(uprCase.concat(nmbr)));
let LUS = hm.concat(lwrCase.concat(uprCase.concat(symb)));
let LUNS = hm.concat(lwrCase.concat(uprCase.concat(symb.concat(nmbr))));
let shw;

var BL = true;
var BN = false;
var BS = false;
var BU = false;
selects();

function selects() {
  if (BL == true && BN == false && BS == false && BU == false) {
    shw = L;
  } else if (BL == true && BN == true && BS == false && BU == false) {
    shw = LN;
  } else if (BL == true && BN == false && BS == true && BU == false) {
    shw = LS;
    $("#sym").addClass(" bg-csblue");
  } else if (BL == true && BN == false && BS == false && BU == true) {
    shw = LU;
    $("#upr").addClass(" bg-csblue");
  } else if (BL == true && BN == true && BS == true && BU == false) {
    shw = LNS;
    $("#nmbr").addClass(" bg-csblue");
    $("#sym").addClass(" bg-csblue");
  } else if (BL == true && BN == true && BS == false && BU == true) {
    shw = LUN;
    $("#upr").addClass(" bg-csblue");
    $("#nmbr").addClass(" bg-csblue");
  } else if (BL == true && BN == false && BS == true && BU == true) {
    shw = LUS;
    $("#upr").addClass(" bg-csblue");
    $("#sym").addClass(" bg-csblue");
  } else if (BL == true && BN == true && BS == true && BU == true) {
    shw = LUNS;
    $("#upr").addClass(" bg-csblue");
    $("#nmbr").addClass(" bg-csblue");
    $("#sym").addClass(" bg-csblue");
  }
  generate();
}

function generate() {
  password.value =
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)] +
    shw[Math.floor(Math.random() * shw.length)];
  $("#copybtn").removeClass("copedbg");
}
generate();

</script>
  <style></style>
  
