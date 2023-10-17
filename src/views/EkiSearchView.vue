<script setup>
import houseArea from "../components/houseArea.vue";
</script>

<template>
  <div class="allArea">
    <houseArea text="都心区　A物件" class="houseArea" />
    <div class="houseInformation"></div>
  </div>
</template>

<style scoped lang="scss">
.allArea {
  background-color: #bec0cd;
  padding: 5vh 0;
  display: flex;
  flex-direction: column;

  .houseArea {
    margin-left: 25%;
  }
  .houseInformation {
    height: 120vh;
    width: 60vw;
    background-color: white;
    border-radius: 8px;
    margin-top: 5vh;
    align-self: center;
  }
}
</style>
