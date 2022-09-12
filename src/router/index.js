import IndexView from '../views/index.vue'
import SimpleView from '../views/simple.vue'
import ListeView from '../views/liste.vue'
import AppView from '../views/App.vue'



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