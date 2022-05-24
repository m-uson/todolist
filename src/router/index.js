import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from '../views/AddProject.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
