import IndexView from '../pages/quartier/index.vue'
import SimpleView from '../pages/simple.vue'
import ListeView from '../pages/liste.vue'
import ListeSupabaseView from '../pages/listeSupabase.vue'
import AppView from '../App.vue'
import NewView from '../pages/edit/new.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'AppView', component: AppView },
        { path: '/quartier/index', name: 'IndexView', component: IndexView },
        { path: '/liste', name: 'ListeView', component: ListeView },
        { path: '/listeSupabase', name: 'ListeSupabaseView', component: ListeSupabaseView },
        { path: '/simple', name: 'SimpleView', component: SimpleView },
        { path: '/edit/new', name: 'NewView', component: NewView }
    ]
})

export default router