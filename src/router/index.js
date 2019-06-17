import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import ShowTeams  from '@/components/team/List'
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
      name: 'ShowTeams',
      component: ShowTeams
    },
    {
      path: '/team',
      name: 'ShowTeams',
      component: ShowTeams
    },
    {
      path: '/team/:id/member',
      name: 'ShowMembers',
      component: ShowMembers
    },
    {
      path: '/team/:id/member/create',
      name: 'CreateMember',
      component: CreateMember
    },
    {
      path: '/team/:id/member/:mid',
      name: 'ShowMember',
      component: ShowMember
    },
    {
      path: '/team/:id/member/:mid/modify',
      name: 'ModifyMember',
      component: ModifyMember
    },
  ]
})
