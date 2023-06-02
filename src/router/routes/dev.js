const commonroute = [
  {
    path: "/dev",
    name: "dev",
    component: () => import("@/views/Dev/CommonRoute.vue"),
  },
  {
    path: "/dev/SearchMatchA",
    name: "dev-SearchMatchA",
    component: () => import("@/views/Dev/SearchMatchA.vue"),
  },
  {
    path: "/dev/SearchMatchB",
    name: "dev-SearchMatchB",
    component: () => import("@/views/Dev/SearchMatchB.vue"),
  },
];
export default commonroute;
