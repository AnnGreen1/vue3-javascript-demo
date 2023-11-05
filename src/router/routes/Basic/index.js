import Button from "@/router/routes/Basic/Button"
const Basic = [
    {
        path: "/Basic",
        name: "Basic",
        component: () => import("@/views/Basic/Index.vue"),
    },
    ...Button
];
export default Basic;