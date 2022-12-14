import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "About Me",
        path: "/",
        component: () => import ("../pages/TheHome.vue" )
    },
    {
        name: "Skills",
        path: "/skills",
        component: () => import ("../pages/TheSkills.vue" )
    },
    {
        name: "Contact",
        path: "/contact",
        component: () => import ("../pages/TheContacts.vue" )
    },
    {
        name: "Achievements",
        path: "/achievements",
        component: () => import ("../pages/TheAchievements.vue" )
    },
    {
        name: "Not Found",
        path: "/:pathMatch(.*)*",
        redirect: "/",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;