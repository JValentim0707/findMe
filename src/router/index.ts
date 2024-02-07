// Composables
import { createRouter, createWebHistory } from 'vue-router'

import HomeComponent from '@/views/Home.vue'
import EeveeComponent from '@/views/Eevee.vue'
import PsyduckComponent from '@/views/Psyduck.vue'


// Admin Components
import AdminDashboarPagedComponent from '@/pages/admin/AdminDashboardPage.vue'
import AdminUsersPagedComponent from '@/pages/admin/AdminUsersPage.vue'

// Users Components
import UserDashboard from '@/pages/user/UsersDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/HomePage.vue')
  },
  {
    path: '/adminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboarPagedComponent,
  },
  {
    path: '/adminUsers',
    name: 'AdminUsers',
    component: AdminUsersPagedComponent,
  },
  {
    path: '/userDashboard',
    name: 'UserDashboard',
    component: UserDashboard,
  },
  {
    path: '/eevee',
    name: 'Eevee',
    component: EeveeComponent,
  },
  {
    path: '/psyduck',
    name: 'Psyduck',
    component: PsyduckComponent,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
