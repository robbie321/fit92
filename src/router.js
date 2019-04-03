import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';

//User
import Signin from './components/User/Signin'
// import Signup from './components/User/Signup'

//blog
import Blog from './components/Blog/blog.vue';
import Post from './components/Blog/postBlog.vue';
import singleBlog from './components/Blog/singleBlog.vue';

//programs
import Program from './components/Programs/programs.vue'
import createProgram from './components/Programs/createProgram.vue'
//aut
import AuthGuard from './auth-guard'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/blog/post',
      name: 'post',
      component: Post,
      beforeEnter: AuthGuard
    },
    {
      path: '/blog/:id',
      name: 'singleBlog',
      component: singleBlog,
    },
    {
      path: '/programs',
      name: 'programs',
      component: Program
    },
    {
      path: '/program/post',
      name: 'programpost',
      component: createProgram,
      beforeEnter: AuthGuard
    },
  ],
});
