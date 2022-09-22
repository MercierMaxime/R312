import IndexView from '../pages/index.vue'
import SimpleView from '../pages/simple.vue'
import ListeView from '../pages/liste.vue'
import ListeFetchView from '../pages/listeFetch.vue'
import AppView from '../App.vue'
import NewView from '../pages/edit/new.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'AppView', component: AppView },
        { path: '/index', name: 'IndexView', component: IndexView },
        { path: '/liste', name: 'ListeView', component: ListeView },
        { path: '/fetch', name: 'ListeFetchView', component: ListeFetchView },
        { path: '/simple', name: 'SimpleView', component: SimpleView },
        { path: '/new', name: 'NewView', component: NewView }
    ]
})

export default router