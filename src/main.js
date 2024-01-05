import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD8rePOOeXyh-jUg4M9wffzAy6b9dp3naE",
    authDomain: "vue-quip-shop.firebaseapp.com",
    projectId: "vue-quip-shop",
    storageBucket: "vue-quip-shop.appspot.com",
    messagingSenderId: "893991000325",
    appId: "1:893991000325:web:3cb96ec95e006c59303f6c"
};

initializeApp(firebaseConfig);

createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHistory(process.env.BASE_URL),
        routes: [{
            path: '/cart',
            component: ShoppingCartPage,
        }, {
            path: '/products',
            component: ProductsPage,
        }, {
            path: '/products/:productId',
            component: ProductDetailPage,
        }, {
            path: '/:pathMatch(.*)*',
            name: 'NotFoundPage',
            component: NotFoundPage,
        }]
    }))
    .mount('#app')