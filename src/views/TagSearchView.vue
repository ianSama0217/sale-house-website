<script setup>
import houseTag from "../components/houseTag.vue";
</script>

<template>
  <div class="allArea">
    <div class="TextArea">
      <h1>都心区</h1>
      <div class="line"></div>
      <div class="tagArea">
        <houseTag name="千代田区" v-for="item in 4" />
        <houseTag name="六本木区" v-for="item in 4" />
        <houseTag name="秋葉原区" v-for="item in 4" />
      </div>
    </div>

    <div class="TextArea">
      <h1>23区東部</h1>
      <div class="line"></div>
      <div class="tagArea">
        <houseTag name="台場区" v-for="item in 4" />
        <houseTag name="秋葉原区" v-for="item in 4" />
      </div>
    </div>

    <div class="TextArea">
      <h1>23区西部</h1>
      <div class="line"></div>
      <div class="tagArea">
        <houseTag name="千代田区" v-for="item in 4" />
        <houseTag name="六本木区" v-for="item in 4" />
        <houseTag name="秋葉原区" v-for="item in 4" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.allArea {
  background-color: #bec0cd;
  display: flex;
  flex-direction: column;
  align-items: center;

  .TextArea {
    width: 50%;
    margin: 5vh;

    .line {
      border-bottom: 2px solid #737373;
      margin: 1rem 0;
    }
    .tagArea {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}

h1 {
  font-size: 2rem;
}
</style>
