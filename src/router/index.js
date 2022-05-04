import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Preview from "../views/Preview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Preview",
    meta: {
      title: "Preview",
    },
    component: Preview,
  },
  {
    path: "/static-demo",
    name: "StaticDemo",
    meta: {
      title: "Static Demo",
    },
    component: () => import("../views/all-home-version/StaticDemo.vue"),
  },
  {
    path: "/particle-demo",
    name: "ParticleDemo",
    meta: {
      title: "Particle Demo",
    },
    component: () => import("../views/all-home-version/ParticleDemo.vue"),
  },
  {
    path: "/typed-headline-demo",
    name: "TypedHeadlineDemo",
    meta: {
      title: "Typed Headline Demo",
    },
    component: () => import("../views/all-home-version/TypedHeadlineDemo.vue"),
  },
  {
    path: "/kenburn-demo",
    name: "KenBurnDemo",
    meta: {
      title: "KenBurn Demo",
    },
    component: () => import("../views/all-home-version/KenBurnDemo.vue"),
  },
  {
    path: "/no-scrolling-animation-demo",
    name: "NoScrollingAnimationDemo",
    meta: {
      title: "No Scrolling Animation Demo",
    },
    component: () =>
      import("../views/all-home-version/NoScrollingAnimationDemo.vue"),
  },
  {
    path: "/dark-demo",
    name: "DarkDemo",
    meta: {
      title: "Dark Demo",
    },
    component: () => import("../views/all-home-version/DarkDemo.vue"),
  },
  {
    path: "/slider-demo",
    name: "SliderDemo",
    meta: {
      title: "Slider Demo",
    },
    component: () => import("../views/all-home-version/SliderDemo.vue"),
  },
  {
    path: "/rtl-demo",
    name: "RtlDemo",
    meta: {
      title: "Rtl Demo",
    },
    component: () => import("../views/all-home-version/RtlDemo.vue"),
  },
  {
    path: "*",
    name: NotFound,
    meta: {
      title: "404",
    },
    component: () => import("../views/NotFound.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title =
      to.meta.title + " | Waxon - VueJS Personal Portfolio Template";
  }
});

export default router;
