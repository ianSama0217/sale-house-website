<script setup></script>

<template>
  <body>
    <div class="background">
      <div class="filterBox">
        <h1>今なら家を 1 軒購入する</h1>
        <h1>と 1 軒が無料になります</h1>
      </div>
    </div>
  </body>
</template>

<style scoped lang="scss">
body {
  padding: 0 10%;
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 90vh;
    border-radius: 8px;
    background-image: url("../../public/房地產圖片/house-1.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    .filterBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60vw;
      height: 70vh;
      border-radius: 8px;
      transition: all 0.5s ease-out;

      &:hover {
        backdrop-filter: blur(5px);
      }

      h1 {
        color: white;
        font-size: 2rem;
      }
    }
  }
}
</style>
