import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Watch from '@/components/Watch'
import ForDemo from '@/components/ForDemo'
import List from '@/components/List'
import CheckBox from '@/components/Checkbox.component'
import ToggleButton from '@/components/ToggleButton'
import Transition from '@/components/Transition'
import Layout from '@/components/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/forDemo',
      name: 'forDemo',
      component: ForDemo
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/check',
      component: CheckBox
    },
    {
      path: '/toggle',
      component: ToggleButton
    },
    {
      path: '/transition',
      component: Transition
    },
    {
      path: '/layout',
      component: Layout
    }
  ]
})
