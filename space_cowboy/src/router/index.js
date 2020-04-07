import Vue from 'vue'
import VueRouter from 'vue-router'
//Views 
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
//Components
import SkillShow from '../components/SkillShow.vue'
import ProjectShow from '../components/ProjectShow.vue'
import ArticleShow from '../components/ArticleShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/articles/:id',
    name: 'ArticleShow',
    component: ArticleShow,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectShow',
    component: ProjectShow,
    props: true
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/skills/:id',
    name: 'SkillShow',
    component: SkillShow,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
