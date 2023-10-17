<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="navbar">
    <RouterLink to="/"><div class="box"></div></RouterLink>

    <div class="shopLinkArea">
      <RouterLink to="/about" class="link">会社案内</RouterLink>
      <h3>|</h3>
      <RouterLink to="/about" class="link">店舗．アクセス</RouterLink>
    </div>

    <div class="phoneLinkArea">
      <img src="../../public/icon/mobile.svg" class="icon" />
      <p>09-12345678</p>
    </div>

    <div class="questionLinkArea">
      <RouterLink to="/login" class="link">ログイン</RouterLink>
      <h3>|</h3>
      <RouterLink to="/question" class="link">お問い合わせ</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.link {
  text-decoration: none;
  font-size: 1rem;
  color: black;
}

.navbar {
  padding: 0 1rem;
  margin-top: 1rem;
  margin-bottom: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .box {
    height: 10vh;
    width: 10vh;
    background-color: #475467;
  }

  .shopLinkArea {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      margin: 0 1rem;
    }
  }

  .phoneLinkArea {
    display: flex;

    .icon {
      width: 2vw;
      height: 2vw;
      margin-right: 1rem;
    }

    p {
      align-self: center;
    }
  }

  .questionLinkArea {
    background-color: #475467;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 1rem 2rem;

    h3 {
      font-size: 1rem;
      margin: 0 1rem;
      color: white;
    }

    .link {
      color: white;
    }
  }
}
</style>
