import Home from '../pages/user/home/Index.vue';

const _user_routes = [
  {
    path: "/",
    name: "user.home",
    component: Home,
    meta: {
        title: "user login",
    }
  },
];

export default _user_routes;
