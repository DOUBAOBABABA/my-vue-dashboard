import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Team from "../views/Team";
import SignIn from "../views/SignInFlow/SignIn";
import Request from "../views/SignInFlow/Request";
import Recover from "../views/SignInFlow/Recover";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/team",
    name: "team",
    components: Team
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/request",
    name: "request",
    components: Request
  },
  {
    path: "/recover",
    name: "recover",
    components: Recover
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
