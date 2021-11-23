import AdminLogin from '../auth/admin/login.vue';

const _public_routes = [
  {
    path: "/admin/login",
    name: "admin.login",
    component: AdminLogin,
    meta: {
        title: "Admin login",
    }
  },
];

export default _public_routes;
