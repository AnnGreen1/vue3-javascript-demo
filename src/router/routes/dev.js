const commonroute = [
  {
    path: "/dev",
    name: "dev",
    component: () => import("@/views/CommonRoute/CommonRoute.vue"),
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
  // /:orderId -> 仅匹配数字
  {
    path: '/test/:orderId(\\d+)',
    component: () => import("@/views/Dev/test/OnlyNumber.vue")
  },
  // /:productName -> 匹配其他任何内容
  {
    path: '/test/:productName',
    component: () => import("@/views/Dev/test/AboveNumber.vue")
  },
  {
    path: '/dev/websocket',
    component: () => import("@/views/Dev/Websocket/Index.vue")
  },
  {
    path: '/dev/websocket/SendUserMediaWebsocket',
    component: () => import("@/views/Dev/Websocket/SendUserMediaWebsocket.vue")
  },
  {
    path: '/dev/websocket/SendMediaWebsocket',
    component: () => import("@/views/Dev/Websocket/SendMediaWebsocket.vue")
  },
  {
    path: '/dev/print',
    component: () => import("@/views/Dev/print.vue")
  },
  {
    path: '/dev/print2',
    component: () => import("@/views/Dev/html2pdf/Index.vue")
  },
];
export default commonroute;
