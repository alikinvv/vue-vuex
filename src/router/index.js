import { createRouter, createWebHashHistory } from 'vue-router';
import GlobalFeed from '../views/GlobalFeed';
import YourFeed from '../views/YourFeed';
import TagFeed from '../views/TagFeed';
import Register from '@/views/Register';
import Login from '@/views/Login';
import Article from '@/views/Article';
import CreateArticle from '@/views/CreateArticle';
import EditArticle from '@/views/EditArticle';
import Settings from '@/views/Settings';

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed,
  },
  {
    path: '/tags/:slug',
    name: 'tagFeed',
    component: TagFeed,
  },
  {
    path: '/user/:slug',
    name: 'userProfile',
    component: GlobalFeed,
  },
  {
    path: '/user/:slug/favorites',
    name: 'userProfileFavorites',
    component: GlobalFeed,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: CreateArticle,
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: Article,
  },
  {
    path: '/article/:slug/edit',
    name: 'editArticle',
    component: EditArticle,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
