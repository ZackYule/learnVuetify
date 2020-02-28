import Vue from "vue";
import VueRouter from "vue-router";
import About from "@/views/About.vue";
import dark from "@/views/dark.vue";
import baseline from "@/views/baseline.vue";
import LayoutsDemosBaselineFlipped from "@/views/baseline-flipped.vue";
import complex from "@/views/complex.vue";
import centered from "@/views/centered.vue";
import sandbox from "@/views/sandbox.vue";
import googlecontact from "@/views/google-contacts.vue";
import googlekeep from "@/views/google-keep.vue";
import googleyoutube from "@/views/google-youtube.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: About },
  { path: "/dark", component: dark },
  { path: "/Baseline", component: baseline },
  { path: "/Baseline-flipped", component: LayoutsDemosBaselineFlipped },
  { path: "/complex", component: complex },
  { path: "/centered", component: centered },
  { path: "/sandbox", component: sandbox },
  { path: "/googlecontacts", component: googlecontact },
  { path: "/googlekeep", component: googlekeep },
  { path: "/googleyoutube", component: googleyoutube }
];

const router = new VueRouter({
  routes
});

export default router;
