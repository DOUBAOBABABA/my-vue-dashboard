<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="login">
      <img src="@/assets/doubaoya-dark.svg" v-show="isDarkMode" />
      <img src="@/assets/doubaoya-light.svg" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDerkMode, 'dark-text': !isDarkMode }">请输入注册邮箱账号</h4>
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
        <button>申请账号</button>
      </form>
      <router-link
        to="/signin"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
      >已经有账户了？现在登录</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "Request",
  components: {
    ThemeSwitch
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

      //Slack API logic
      let slackURL = new URL("https://slack.com/api/chat.postMessage");

      const data = {
        token:
          "xoxp-1191291880882-1176549340951-1192797941795-01c5135b21bc0d099bb8173cbd3c465b",
        channel: "doubaobabaduck",
        text: `有新用户 ${email} 申请加入豆包+鸭啦，快去Netlify邀请他们！`
      };
      slackURL.search = new URLSearchParams(data);

      fetch(slackURL)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRequestedAccount: true,
              email: email
            }
          });
        })
        .catch(error => {
          alert("Error:" + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "你已经退出登录啦！";
    }
  }
  // Other properties
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

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
