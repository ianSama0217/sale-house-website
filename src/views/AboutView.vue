<script setup>
import { ref } from "vue";

const aboutText = ref([
  "お気に入り物件",
  "お気に入りタッグ",
  "ユーザー設定",
  "XXXXXX",
  "OOOOOO",
  "お問い合わせ履歴",
]);
</script>

<template>
  <div class="aboutArea">
    <div class="linkInBox">
      <div class="linkBtn" v-for="item in aboutText">
        <h3 class="linkText">{{ item }}</h3>
      </div>
    </div>
  </div>
</template>

<style>
.aboutArea {
  background-color: #bec0cd;
  height: 82vh;
  display: flex;
  justify-content: center;
  padding: 5% 30% 0 30%;

  .linkInBox {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 40vh;

    .linkBtn {
      height: 5rem;
      width: 10rem;
      background-color: #475467;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      .linkText {
        font-size: 1.15rem;
      }
    }
  }
}
</style>
