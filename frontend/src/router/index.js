import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '메인페이지',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/join',
            name: '회원가입',
            component: () => import('../views/Join.vue')
        },{
            path: '/login',
            name: '로그인',
            component: () => import('../views/Login.vue')
        },{
            path: '/cart',
            name: '장바구니',
            component: () => import('../views/Cart.vue')
        },{
            path: '/order',
            name: '주문하기',
            component: () => import('../views/OrderForm.vue')
        },{
            path: '/orders',
            name: '주문내역',
            component: () => import('../views/Orders.vue')
        },{
            path: '/orders/:id',
            name: '주문내역 자세히보기',
            component: () => import('../views/OrderDetail.vue')
        }
    ]
});

export default router;