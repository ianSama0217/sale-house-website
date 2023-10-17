<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="houseBar">
    <div class="imgBox"></div>
    <div class="textBox">
      <h3>{{ text }}</h3>
      <div class="line"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.houseBar {
  margin-top: 5vh;
  display: flex;

  .imgBox {
    background-color: #475467;
    height: 20vh;
    width: 20vh;
    border-radius: 8px;
    margin-right: 4rem;
  }
  .textBox {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .line {
      border-bottom: 1px solid #737373;
      width: 300%;
    }
  }
}
</style>
