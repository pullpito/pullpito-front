import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter ({
	mode: 'history',
	routes: [
    {
			path: '/',
			name: 'Home',
			component: () => import('./components/views/Home.vue'),
      meta: { isPublic: false }
		},
    {
			path: '/login',
			name: 'Login',
			component: () => import('./components/views/Login.vue'),
			meta: { isPublic: true }
		}
	]
})

router.beforeEach((to, from, next) => {
	let vue = router.app;
	if(!to.meta.isPublic) {
		if(!vue.$session.exists()) {
			next('/login');
		} else {
			vue.$api.defaults.headers.common['access-token'] = vue.$session.get('access-token');
			vue.$api.defaults.headers.common['client'] = vue.$session.get('client');
			vue.$api.defaults.headers.common['uid'] = vue.$session.get('uid');
			next();
		}
	} else {
		if(to.path == "/login" && vue.$session.exists()) {
			next('/');
		} else {
			next();
		}
	}
})

export default router;