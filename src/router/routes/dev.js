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
  ,
  {
    path: "/dev/printfrom",
    name: "dev-printfrom",
    component: () => import("@/views/Dev/form.vue"),
  }
];
export default commonroute;
