<template>
  <div id="app" :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }">
    <router-view />
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f8f9fa";
  }
};
</script>

<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  margin: 0;
  background-color: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

line,
text {
  opacity: 0.2;
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}

h4 {
  margin: 1;
  font-size: 24px;
  line-height: 34px;
  padding-left: 10px;
  text-align: center;
  color: #ffffff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    border: 1px solid $blue;
    box-shadow: 0 0 0 1px $blue;
    outline: none;
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}
/* THEME */
.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

.light-background {
  background-color: $light-gray;

  line,
  text {
    stroke: $black;
  }
}

.dark-background {
  background-color: $dark-blue;

  line,
  text {
    stroke: $light-gray;
  }
}

.light-box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-box {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
