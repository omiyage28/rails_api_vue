import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import PageUserRegister from '@/pages/PageUserRegister'
import PageUserLogin from '@/pages/PageUserLogin'
import PageTimeline from '@/pages/PageTimeline'
import MicropostForm from '@/components/MicropostForm'

const router = new VueRouter({
  mode: 'history',
    routes: [
      { path: '/signup', 
        component: PageUserRegister, 
        name: 'user-register' 
      },
      { path: '/login', 
        component: PageUserLogin, 
        name: 'user-login' 
      },
      { path: '/', 
        component: PageTimeline, 
        name: 'timeline' 
      },
    ]
});

export default router; 