import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupPage.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/MainPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/add",
      component: () => import("@/views/PostAddPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});

/**
 * VueRouter.beforeEach(guard: NavigationGuard): Function
 * export type NavigationGuard<V>
 * Alias for: (to: Route, from: Route, next: NavigationGuardNext<V>) => any
 * to : 갈 곳
 * from : 온 곳
 * next : 가도 됨.
 */
router.beforeEach((to, from, next) => {
  // 페이지 이동 전에 실행할 행동
  if (to.meta.auth && !store.getters.isLogin) {
    // 사용자 접근 제어
    next("/login");
    return;
  }
  next();
});

export default router;
