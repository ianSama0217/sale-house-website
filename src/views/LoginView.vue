<script setup></script>

<template>
  <div class="LoginArea">
    <form action="">
      <div class="textBar">
        <label for="">Email</label>
        <img src="../../public/icon/email.svg" class="icon mail" />
        <input type="email" class="inputText" placeholder="info@gmail.com" />
        <img
          src="../../public/icon/circle-question.svg"
          class="icon question"
        />
      </div>
      <div class="textBar">
        <label for="">Name / Password</label>
        <img src="../../public/icon/email.svg" class="icon mail" />
        <input type="password" class="inputText" placeholder="Sujit Sen" />
        <img
          src="../../public/icon/circle-question.svg"
          class="icon question"
        />
      </div>

      <div class="checkboxAndLinkBar">
        <input type="checkbox" class="checkbox" />
        <p>ログインを保持する</p>
        <a href="">新規登録</a>
      </div>

      <button type="button">ログイン</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.icon {
  height: 2vw;
  width: 2vw;
  position: absolute;
}
.LoginArea {
  height: 82vh;
  background-color: #bec0cd;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: 30vw;
    justify-content: space-between;

    .textBar {
      position: relative;

      .mail {
        top: 45%;
        left: 2%;
      }

      .question {
        top: 45%;
        right: 2%;
      }

      label {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }

      .inputText {
        height: 1.75rem;
        width: 30vw;
        border: none;
        border-radius: 8px;
        margin-bottom: 1rem;
        padding-left: 2.5rem;
      }
    }
    .checkboxAndLinkBar {
      display: flex;
      justify-content: space-between;

      .checkbox {
        height: 1.5vw;
        width: 1.5vw;
      }

      p {
        font-size: 1rem;
        margin-right: 8.5rem;
      }

      a {
        text-decoration: none;
        color: black;
      }
    }

    button {
      align-self: center;
      background-color: #475467;
      color: white;
      border: none;
      width: 12vw;
      height: 5vw;
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      border-radius: 8px;
    }
  }
}
</style>
