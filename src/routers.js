import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import DashboardView from "./Pages/DashboardView.vue";
import {createRouter,createWebHistory} from "vue-router";

const routes=[
    {
        name:"HomePage",
        component:Home,
        path: "/",
    },
    {
        name:"SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name:"DashboardView",
        component: DashboardView,
        path: "/dashboard",
    },
];

const router=createRouter ({
    history:createWebHistory(),
    routes,
});

export default router;