import Vue from 'vue'
import Router from 'vue-router'
import Character from './components/Character.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Character
    },
    {
      path: '/race',
      name: 'race',
      component: () => import(/* webpackChunkName: "race" */ './views/RaceSelection.vue')
    }
  ]
})
