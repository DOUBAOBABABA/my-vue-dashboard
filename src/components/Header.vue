<template>
  <div id="nav">
    <router-link to="/">主页</router-link>|
    <router-link to="/team">队伍</router-link>|
    <a @click="onClick">退出登录</a>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  methods: {
    onClick() {
      const user = auth.currentUser();

      user
        .logout()
        .then(response => {
          this.$router.push({
            name: "signin",
            params: { userLoggedOut: true }
          });
          return response;
        })
        .catch(error => {
          alert("发生错误了鸭", error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
