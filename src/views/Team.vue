<template>
  <div class="container">
    <Header />
    <h2>团队</h2>
    <div class="cards">
      <transition appear appear-active-class="animate__animated animate__flipInX">
        <a class="card card-1" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/slack.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Slack</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">团队交流协作工具</p>
        </a>
      </transition>
      <transition appear appear-active-class="animate__animated animate__flipInX">
        <a class="card card-2" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/notion.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Notion</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">从此以后只需要一本笔记</p>
        </a>
      </transition>
      <transition appear appear-active-class="animate__animated animate__flipInX">
        <a class="card card-3" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/figma.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Figma</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">团队协作的轻型设计工具</p>
        </a>
      </transition>
      <transition appear appear-active-class="animate__animated animate__flipInX">
        <a class="card card-4" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/dropbox.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">DropBox</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">最好用的云端存储空间</p>
        </a>
      </transition>
      <transition appear appear-active-class="animate__animated animate__flipInX">
        <a class="card card-5" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/contentful.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Contentful</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">内容管理系统</p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.container {
  margin-left: 25px;
}

h2 {
  @include heading-2;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  height: 400px;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin: 20px;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}
.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0px;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}
</style>
