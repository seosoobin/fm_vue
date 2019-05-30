import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import ShowMembers  from '@/components/member/List'
import ShowMember   from '@/components/member/Detail'
import CreateMember from '@/components/member/Create'
import ModifyMember from '@/components/member/Modify'
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
      path: '/:id/member',
      name: 'ShowMembers',
      component: ShowMembers
    },
    {
      path: '/:id/member/create',
      name: 'CreateMember',
      component: CreateMember
    },
    {
      path: '/:id/member/:mid',
      name: 'ShowMember',
      component: ShowMember
    },
    {
      path: '/:id/member/modify',
      name: 'ModifyMember',
      component: ModifyMember
    },
  ]
})
