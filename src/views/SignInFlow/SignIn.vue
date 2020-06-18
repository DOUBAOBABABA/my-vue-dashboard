<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <Notification v-if="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/doubaoya-dark.svg" v-show="isDarkMode" />
      <img src="@/assets/doubaoya-light.svg" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDerkMode, 'dark-text': !isDarkMode }">
        登录 DouBao+Duck
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="邮箱地址"
          :class="{
            'light-field': isDarkMode,
            'dark-field': !isDarkMode,
            'light-text': isDarkMode,
            'dark-text': !isDarkMode
          }"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="账户密码"
          :class="{
            'light-field': isDarkMode,
            'dark-field': !isDarkMode,
            'light-text': isDarkMode,
            'dark-text': !isDarkMode
          }"
          v-model="password"
          required
        />
        <button>登录</button>
      </form>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >忘记密码?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import Notification from "@/components/Notification";
import { auth } from "@/main";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then(response => {
          response.email;
          this.$router.replace("/");
        })
        .catch(error => {
          alert("emmm不对哦 " + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "你已经退出登录啦！";
    } else if (params.userRecoveredAccount) {
      this.hasText = true;
      this.text = "重置密码链接已经发送到" + params.email;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text = `您的申请已经提交到后台，账号： ${params.email}`;
    }
  }
  // Other properties
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 135, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>
