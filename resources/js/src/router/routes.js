import _admin_routes from './_admin_routes';
import _public_routes from './_public_routes';
import _user_routes from './_user_routes';

export const routes = [
    ..._admin_routes,
    ..._public_routes,
    ..._user_routes,
];
