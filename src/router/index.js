import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/LoginPage'
import MovieIndexPage from '@/components/MovieIndexPage'
import MovieShowPage from '@/components/MovieShowPage'
import MemberList from '@/components/member/List'
import MemberDetail from '@/components/member/Detail'
import MemberCreate from '@/components/member/Create'
import App from '@/App';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/loginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/movie',
      name: 'MovieIndexPage',
      component: MovieIndexPage
    },
    {
      path: '/movie/:id',
      name: 'MovieShowPage',
      component: MovieShowPage
    },
    {
      path: '/:id/member',
      name: 'MemberList',
      component: MemberList
    },
    {
      path: '/:id/member/create',
      name: 'MemberCreate',
      component: MemberCreate
    },
    {
      path: '/:id/member/:mid',
      name: 'MemberDetail',
      component: MemberDetail
    }
  ]
})
