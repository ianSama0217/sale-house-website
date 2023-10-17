<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="box">
    <input type="checkbox" />
    <span>{{ name }}</span>
  </div>
</template>

<style scoped lang="scss">
.box {
  background-color: #475467;
  display: flex;
  justify-content: space-between;
  height: 2rem;
  width: 8.5rem;
  border-radius: 8px;
  padding: 0 1rem;
  margin: 0.5rem;

  input {
    width: 1.5vw;
    height: 1.5vw;
    border: none;
    align-self: center;
  }

  span {
    font-size: 1.25rem;
    color: white;
  }
}
</style>
