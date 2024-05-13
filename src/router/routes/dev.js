const commonroute = [
  {
    path: "/dev",
    name: "dev",
    component: () => import("@/views/CommonRoute/CommonRoute.vue"),
  },
  {
    path: "/dev/SearchMatch/SearchMatchA",
    name: "dev-SearchMatch-SearchMatchA",
    component: () => import("@/views/Dev/SearchMatch/SearchMatchA.vue"),
  },
  {
    path: "/dev/SearchMatch/SearchMatchB",
    name: "dev-SearchMatch-SearchMatchB",
    component: () => import("@/views/Dev/SearchMatch/SearchMatchB.vue"),
  },
  // /:orderId -> 仅匹配数字
  {
    path: '/test/:orderId(\\d+)',
    component: () => import("@/views/Dev/RouteMatch/OnlyNumber.vue")
  },
  // /:productName -> 匹配其他任何内容
  {
    path: '/test/:productName',
    component: () => import("@/views/Dev/RouteMatch/AboveNumber.vue")
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
  {
    path: '/dev/PdfImg',
    component: () => import("@/views/Dev/PdfImg.vue")
  },
  {
    path: '/dev/Recorder',
    component: () => import("@/views/Dev/Recorder/Index.vue")
  },
  {
    path: '/dev/RecorderMyself/demo',
    component: () => import("@/views/Dev/RecorderMyself/demo.vue")
  },
  {
    path: '/dev/Recorder2',
    component: () => import("@/views/Dev/Recorder2/Record.vue")
  },
  {
    path: '/dev/menu',
    component: () => import("@/views/Dev/Menu/Index.vue")
  },
  {
    path: '/dev/menu2',
    component: () => import("@/views/Dev/Menu/demo.vue")
  },
  {
    path: '/dev/menu3',
    component: () => import("@/views/Dev/Menu/UsePopover.vue")
  },
];
export default commonroute;
