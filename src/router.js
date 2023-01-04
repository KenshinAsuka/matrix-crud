import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/Members",
    name: "Members",
    component: () => import("./components/MemberList")
  },
  {
    path: "/Members/:id",
    name: "Member-List",
    component: () => import("./components/Member")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddMember")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;