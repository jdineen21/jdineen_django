let mix = require('laravel-mix');

mix.js('src/js/app.js', 'static/compiled').react();

mix.sass('src/sass/app.scss', 'static/compiled');