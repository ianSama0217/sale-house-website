<script setup>
import houseArea from "../components/houseArea.vue";
</script>

<template>
  <div class="allArea">
    <houseArea text="都心区　A物件" />
    <houseArea text="都心区　B物件" />
    <houseArea text="都心区　C物件" />
    <houseArea text="都心区　D物件" />
  </div>
</template>

<style scoped lang="scss">
.allArea {
  background-color: #bec0cd;
  padding: 5vh 25%;
}
</style>
