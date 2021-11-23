const mix = require('laravel-mix');
// const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

//  let config = {
//     module: {
//       rules: [
//         {
//           test: /\.scss/,
//           enforce: "pre",
//           loader: "import-glob-loader"
//         }
//       ]
//     },
//     resolve: {
//       alias: {
//         "@": path.resolve("./resources/assets/js"),
//         "~": path.resolve("./resources/assets/sass")
//       }
//     }
//   };

//   mix.webpackConfig(config);

// Admin
mix.js('resources/js/app.js', 'public/js').vue()
    .js('resources/js/src/main.js', 'public/js/admin/')
    .sass('resources/js/src/assets/scss/app.scss', 'public/css/admin/')

mix.copy('node_modules/admin-lte/dist/css/adminlte.css', 'public/css/admin');
mix.copy('node_modules/admin-lte/dist/js/adminlte.min.js', 'public/js/admin');
mix.copy('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'public/css/admin/font-awesome-free.min.css');
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');
mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js/admin');

