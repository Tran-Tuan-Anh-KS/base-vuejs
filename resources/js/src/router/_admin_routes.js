/* MainLayout */
// import MainLayout from '@/components/agent/layouts/MainLayout'


// import Dashboard from '../pages/dashboard/index.vue';
// import Layout from '../components/base/body.vue';

// const routes = [
//     {
//         path: '/admin',
//         component: Layout,
//         children: [
//           {
//             path: 'dashboard',
//             component: Dashboard,
//             name: 'dashboard',
//           }
//         ]
//     },
// ];

import MainLayout from '../components/admin/layouts/MainLayout.vue'

import Default from '../pages/admin/dashboard/index.vue'

const _admin_routes = [
  {
    path: '/admin',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        name: 'admin.dashboard',
        component: Default,
        meta: {
          title: 'Default Dashboard',
        }
      },
    ]
  }
]

export default _admin_routes;
