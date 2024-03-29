const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
  .webpackConfig({
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        '@js': path.resolve(__dirname, 'resources/js'),
      },
    },
  })
  .postCss('resources/css/app.css', 'public/css/app.css', [
    require('tailwindcss'),
  ])
  .copy('node_modules/vuesax/dist/vuesax.css', 'public/css/vuesax.css')
  .copyDirectory('resources/assets/', 'public/assets/');



mix.webpackConfig({
  output: {
    chunkFilename: 'js/chunks/[name].js',
  },
});
