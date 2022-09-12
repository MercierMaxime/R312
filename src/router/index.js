import IndexView from '../pages/index.vue'
import SimpleView from '../pages/simple.vue'
import ListeView from '../pages/liste.vue'
import AppView from '../App.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'AppView', component: AppView },
        { path: '/index', name: 'IndexView', component: IndexView },
        { path: '/liste', name: 'ListeView', component: ListeView },
        { path: '/simple', name: 'SimpleView', component: SimpleView },
    ]
})

export default router