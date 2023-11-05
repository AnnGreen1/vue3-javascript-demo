import Input from "@/router/routes/Form/Input"
import Forms from "@/router/routes/Form/Form"
import Radio from "@/router/routes/Form/Radio";
const Form = [
    {
        path: "/Form",
        name: "Form",
        component: () => import("@/views/Form/Index.vue"),
    },
    ...Input,
    ...Forms,
    ...Radio
];
export default Form;