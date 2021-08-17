import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./pages/Home.vue')
const Album = () => import('./pages/Album.vue')
const AlbumList = () => import('./pages/AlbumList.vue')
const User = () => import('./pages/User.vue')
const UserList = () => import('./pages/UserList.vue')
const UserEdit = () => import('./pages/UserEdit.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/albums/:id',
      name: 'album',
      component: Album,
      props: true,
    },
    {
      path: '/albums',
      name: 'album-list',
      component: AlbumList
    },
    {
      path: '/users/:id/edit',
      name: 'user-edit',
      component: UserEdit,
      props: true,
    },
    {
      path: '/users/:id',
      name: 'user',
      component: User,
      props: true,
    },
    {
      path: '/users',
      name: 'user-list',
      component: UserList,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '*',
      redirect: '/home',
    },
  ]
})