import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        alias: "/contactbook",
        name: "ContactBook",
        component: () => import("../views/ContactBook"),
    },
    {
        path: "/contacts/:id",
        name: "EditContact",
        component: () => import("../views/ContactEdit"),
    },
    {
        path:"/add",
        alias: "/Addcontact",
        component: () => import("../views/ContactAdd"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
 
export default router;
