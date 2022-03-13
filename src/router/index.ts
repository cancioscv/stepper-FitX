import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import StepOne from "@/components/steps/StepOne.vue";
import StepTwo from "@/components/steps/StepTwo.vue";
import StepThree from "@/components/steps/StepThree.vue";
import StepFour from "@/components/steps/StepFour.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StepOne",
    component: StepOne,
  },
  {
    path: "/2",
    name: "StepTwo",
    component: StepTwo,
  },
  {
    path: "/3",
    name: "StepThree",
    component: StepThree,
  },
  {
    path: "/4",
    name: "StepFour",
    component: StepFour,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
