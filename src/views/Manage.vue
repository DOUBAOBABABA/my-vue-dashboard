<template>
  <div class="manage">
    <Header />
    <div class="container">
      <h1 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">用户管理</h1>
      <p :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}">输入用户邮箱或订阅ID</p>
      <form @submit.prevent="获得用户信息" class="manage-container">
        <input
          type="email"
          style="margin: 0"
          class="field"
          :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode,'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          placeholder="用户邮箱"
        />
        <p
          :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          style="margin: 0 20px 0 20px"
        >or</p>
        <input
          type="text"
          style="margin: 0"
          class="field"
          :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode,'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          placeholder="订阅 ID"
        />
        <button style="margin: 0 0 0 25px" class="button">获得用户信息</button>
      </form>
      <hr class="line-break" />
      <h1 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">用户信息</h1>
      <div class="details-container">
        <div class="detail">
          <div
            class="detail-title"
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >订阅状态</div>
          <div
            class="detail-text"
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >{{subscriptionState}}</div>
        </div>
        <div class="detail">
          <div
            class="detail-title"
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >已购买</div>
          <div
            class="detail-text"
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >{{seated}}</div>
        </div>
        <div class="detail">
          <div
            class="detail-title"
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >试用中</div>
          <div
            class="detail-text"
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >{{onTrial}}</div>
        </div>
        <div class="detail">
          <div
            class="detail-title"
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >试用到期时间</div>
          <div
            class="detail-text"
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >{{trialEndDate}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "manage",
  components: {
    Header
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  data() {
    return {
      subscriptionState: "",
      seated: "",
      onTrial: "",
      trialEndDate: ""
    };
  },
  methods: {
    getUserData() {
      let url = new URL("http://localhost:9000/hello");
      const data = {
        email: "test@designcode.io"
      };
      url.search = new URLSearchParams(data);
      fetch(url).then(response => {
        console.log(response);
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
.container {
  padding-left: 15%;
  padding-right: 15%;
}
h1 {
  margin-top: 40px;
}
p {
  line-height: 25px;
  font-size: 16px;
  font-weight: 400;
}
.manage-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
}
.line-break {
  opacity: 0.2;
  height: 1px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}
.details-container {
  margin: 0 -40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}
.detail {
  width: 400px;
  max-width: 35%;
  margin: 20px 40px;
}
.detail-title {
  opacity: 0.3;
  margin-bottom: 16px;
}
.detail-text {
  margin-top: -12px;
  line-height: 31px;
  font-size: 20px;
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
</style> 