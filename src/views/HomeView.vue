<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- bootstrap的輪播器 -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../public/房地產圖片/banner1.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../public/房地產圖片/banner2.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../public/房地產圖片/banner3.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="footerLink">
    <div class="box">
      <RouterLink to="/tag" class="link">タッグから探す</RouterLink>
    </div>
    <div class="box">
      <RouterLink to="/area" class="link">エリアから探す</RouterLink>
    </div>
    <div class="box">
      <RouterLink to="/eki" class="link">沿線．駅から探す</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footerLink {
  background-color: #bec0cd;
  height: 50vh;
  padding: 5% 15%;
  display: flex;
  justify-content: space-between;
  .box {
    border: 0px solid black;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #475467;
    border-radius: 8px;
    .link {
      text-decoration: none;
      font-size: 1.5rem;
      color: white;
    }
  }
}
</style>
