const commonroute = [
  {
    path: "/dev",
    name: "dev",
    component: () => import("@/views/Dev/dev.vue"),
  },
  {
    path: "/dev/print",
    name: "dev-print",
    component: () => import("@/views/Dev/print.vue"),
  }
];
export default commonroute;
