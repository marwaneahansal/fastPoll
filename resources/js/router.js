import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);


const router = new Router({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: '/',
			redirect: 'home',
			component: () => import('./views/main.vue'),
			children: [
				{
					path: '/home',
					name: 'home',
					component: () => import('./views/landing-hero.vue'),
				},
				{
					path: '/createpoll',
					name: 'create_poll',
					component: () => import('./views/NewPoll.vue'),
				},
				{
					path: '/poll/:uri',
					name: 'poll',
					component: () => import('./views/poll.vue'),
				},
				{
					path: '/polls',
					name: 'publicPolls',
					component: () => import('./views/publicPolls.vue'),
				},
				{
					path: '/login',
					name: 'login',
					component: () => import('./views/auth/Login.vue'),
				},
				{
					path: 'register',
					name: 'register',
					component: () => import('./views/auth/Register.vue'),
				},
				{
					path: 'dashboard',
					name: 'dashboard',
					component: () => import('./views/Dashboard.vue'),
				},
				{
					path: 'mypolls',
					name: 'mypolls',
					component: () => import('./views/UserPolls.vue'),
				},
			],
		},
	],
});

export default router;
