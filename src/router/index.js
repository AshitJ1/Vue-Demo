import { createWebHistory, createRouter } from "vue-router"
import HomePage from '../components/HomePage.vue'
import UserList from '../components/UserList.vue'

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/users",
        name: "UserList",
        component: UserList,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router