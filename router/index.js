import { createRouter, createWebHashHistory } from 'vue-router'
import ListBook from '@/components/ListBook'
import CreateBook from '@/components/CreateBook'
import EditBook from '@/components/EditBook'
import ShowBook from '@/components/ShowBook'

const routes = [
  {
    path: '/',
    name: 'ListBook',
    component: ListBook
  },
  {
    path: '/create',
    name: 'CreateBook',
    component: CreateBook
  },
  {
    path: '/edit:id',
    name: 'EditBook',
    component: EditBook
  },
  {
    path: '/show:id',
    name: 'ShowBook',
    component: ShowBook
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
