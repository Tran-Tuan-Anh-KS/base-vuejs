import Dashboard from '../pages/dashboard/index.vue';
import Layout from '../components/base/body.vue';

const routes = [
    {
        path: '/admin',
        component: Layout,
        children: [
          {
            path: 'dashboard',
            component: Dashboard,
            name: 'dashboard',
          }
        ]
    },
];

export default routes;
