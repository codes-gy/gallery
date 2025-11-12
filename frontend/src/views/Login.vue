<script setup>

import {reactive} from "vue";
import {useRouter} from "vue-router";
import {check, login} from "@/services/accountService.js";
import {useAccountStore} from "@/stores/account.js";

const state = reactive({
  form : {
    loginId : "",
    loginPw : ""
  }
});

const router = useRouter();
const accountStore = useAccountStore();

const submit = async () => {

  if(!state.form.loginId?.trim()) {
    window.alert("이메일을 입력해주세요.");
    document.getElementById("loginId")?.focus();
    return;
  } else if(!state.form.loginPw?.trim()) {
    window.alert("비밀번호를 입력해주세요.");
    document.getElementById("loginPw")?.focus();
    return;
  }

  const res = await login(state.form);

  switch (res.status) {
    case 200 :
      accountStore.setAccessToken(res.data);
      await router.push("/");
      break;
    case 404 :
      window.alert("입력하신 정보와 일치하는 회원이 없습니다.");
      break;
  }
};
</script>
<template>
  <div class="container">
    <form class="py-58 d-flex flex-column gap-3" @submit.prevent="submit">
      <h1 class="h5 mb-3">로그인</h1>
      <div class="form-floating">
        <input type="email" class="form-control" id="loginId" placeholder="아이디" v-model="state.form.loginId">
        <label for="loginId">아이디</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="loginPw" placeholder="비밀번호" v-model="state.form.loginPw">
        <label for="loginPw">비밀번호</label>
      </div>
      <button type="submit" class="w-100 h6 btn py-3 btn-primary">로그인</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.login > .container {
  max-width: 576px;
}
</style>