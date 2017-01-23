/**
 * Created by yeoman generator-django-ana <%= version %> on <%= date %>.
 *
 * Gulp configuration
 * Adapted from gulpfile-ninecms
 *
 * gulp (watch) : for development
 * gulp build : for a one off development build
 * gulp build --production : for a minified production build
 */

/*
 * Configuration
 */
var paths = {
  assets: [
    // 'node_modules/bootstrap/dist/*fonts/*',
    // 'private/*images/*'
  ],
  sass: [
    'private/stylesheets/*.s?ss'
  ],
  less: [],
  css: [
    'node_modules/bootstrap/dist/css/bootstrap*(|-theme).css',
    'static/css/<%= name %>.css' // sass build
  ],
  js: '',
  js_watch: [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'private/javascripts/*.js'
    // angular
    // 'node_modules/angular/angular.js',
    // 'node_modules/angular-animate/angular-animate.js',
    // 'private/javascripts/<%= name %>/*.module.js',
    // 'private/javascripts/<%= name %>/*.module.js',
    // 'private/javascripts/<%= name %>/**/*.controller.js'
  ],
  partials: [],
  js_lint: [
    'private/javascripts/*.js',
    '*.js'
  ],
  base64: [],
  inlineCss: {
    html: 'private/html/email_body.html',
    build: 'templates/envelope/'
  },
  fonts: 'private/',
  build: 'static/',
  images: '',

  admin: {
    assets: [
      'node_modules/bootstrap/dist/*fonts/*',
      'node_modules/font-awesome/*fonts/*',
      'node_modules/gentelella/vendors/bootstrap/dist/*js/bootstrap.min.js',
      'node_modules/ng-gentelella/*gentelella/gentelella.jquery.js'
    ],
    sass: [
      'private/javascripts/admin/**/*.s?ss',
      'node_modules/ng-gentelella/gentelella/*.s?ss'
    ],
    css: [
      'node_modules/gentelella/vendors/bootstrap/dist/css/bootstrap.css',
      'node_modules/font-awesome/css/font-awesome.css',
      'node_modules/gentelella/vendors/nprogress/nprogress.css',
      'node_modules/gentelella/vendors/iCheck/skins/flat/green.css',
      'node_modules/gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css',
      'node_modules/gentelella/vendors/pnotify/dist/pnotify.css',
      'node_modules/gentelella/vendors/pnotify/dist/pnotify.buttons.css',
      'node_modules/gentelella/vendors/pnotify/dist/pnotify.nonblock.css',
      'node_modules/gentelella/vendors/select2/dist/css/select2.min.css',
      'static/admin/css/admin.*.css',
      'static/admin/css/gentelella.*.css'
    ],
    js_watch: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/ng-file-upload/dist/ng-file-upload.js',
      'node_modules/gentelella/vendors/fastclick/lib/fastclick.js',
      'node_modules/gentelella/vendors/nprogress/nprogress.js',
      'node_modules/gentelella/vendors/Chart.js/dist/Chart.min.js',
      'node_modules/gentelella/vendors/gauge.js/dist/gauge.min.js',
      'node_modules/gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js',
      'node_modules/gentelella/vendors/iCheck/icheck.min.js',
      'node_modules/gentelella/vendors/skycons/skycons.js',
      'node_modules/gentelella/vendors/Flot/jquery.flot.js',
      'node_modules/gentelella/vendors/Flot/jquery.flot.pie.js',
      'node_modules/gentelella/vendors/Flot/jquery.flot.time.js',
      'node_modules/gentelella/vendors/Flot/jquery.flot.stack.js',
      'node_modules/gentelella/vendors/Flot/jquery.flot.resize.js',
      'node_modules/gentelella/production/js/flot/jquery.flot.orderBars.js',
      'node_modules/gentelella/production/js/flot/date.js',
      'node_modules/gentelella/production/js/flot/jquery.flot.spline.js',
      'node_modules/gentelella/production/js/flot/curvedLines.js',
      'node_modules/gentelella/production/js/moment/moment.min.js',
      'node_modules/gentelella/production/js/datepicker/daterangepicker.js',
      'node_modules/gentelella/vendors/pnotify/dist/pnotify.js',
      'node_modules/gentelella/vendors/pnotify/dist/pnotify.buttons.js',
      'node_modules/gentelella/vendors/pnotify/dist/pnotify.nonblock.js',
      'node_modules/gentelella/vendors/select2/dist/js/select2.full.js',

      'node_modules/ng-gentelella/gentelella/*.module.js',
      'node_modules/ng-gentelella/gentelella/*.config.js',
      'node_modules/ng-gentelella/gentelella/**/*.module.js',
      'node_modules/ng-gentelella/gentelella/**/*.component.js',
      'node_modules/ng-gentelella/gentelella/**/*.service.js',

      'private/javascripts/admin/*.module.js',
      'private/javascripts/admin/*.config.js',
      'private/javascripts/admin/core/*.module.js',
      'private/javascripts/admin/core/*.filter.js',
      'private/javascripts/admin/core/**/*.module.js',
      'private/javascripts/admin/core/**/*.service.js',
      'private/javascripts/admin/dashboard*/*.module.js',
      'private/javascripts/admin/dashboard*/*.component.js',
      'private/javascripts/admin/*list/*.module.js',
      'private/javascripts/admin/*list/*.component.js',
      'private/javascripts/admin/*detail/*.module.js',
      'private/javascripts/admin/*detail/*.component.js',
      'private/javascripts/admin/*detail/*.filter.js',

      'static/admin/partials.js'
    ],
    partials: [
      'node_modules/*ng-gentelella/gentelella/**/*.html',
      'private/*javascripts/admin/**/*.html'
    ],
    build: 'static/admin/'
  }
};
var config = {
  autoprefixer_versions: ['last 2 version', 'safari 5', 'ie 8', 'ie 9']
};
var images = [];

/*
 * Include section
 */
'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var taskMethods = require('gulpfile-ninecms');

var tasks = {
  clean: function () { return taskMethods.clean(paths); },
  assets: function () { return taskMethods.assets(paths); },
  css: function () { return taskMethods.css(paths); },
  less: function () { return taskMethods.less(paths); },
  sass: function () { return taskMethods.sass(paths); },
  browserify: function () { return taskMethods.browserify(paths); },
  lintJs: function () { return taskMethods.lintJs(paths); },
  concatJs: function () { return taskMethods.concatJs(paths); },
  preloadNgHtml: function () { return taskMethods.preloadNgHtml(paths); },
  images: function () { return taskMethods.images(paths, images); },
  clean_image_opts: function () { return taskMethods.clean_image_opts() },
  fonts: function () { return taskMethods.fonts(paths); },
  nsp: function () { return taskMethods.nsp(); },
  base64: function () { return taskMethods.base64(paths); },
  inlineCss: function () { return taskMethods.inlineCss(paths); },

  adminAssets: function () { return taskMethods.assets(paths.admin); },
  adminCss: function () { return taskMethods.css(paths.admin); },
  adminSass: function () { return taskMethods.sass(paths.admin); },
  adminConcatJs: function () { return taskMethods.concatJs(paths.admin); },
  adminPreloadNgHtml: function () { return taskMethods.preloadNgHtml(paths.admin); }
};

gulp.task('clean', tasks.clean);
// for production we require the clean method on every individual task
var build = argv._.length ? argv._[0] === 'build' : false;
var req = build ? ['clean'] : [];
// individual tasks
gulp.task('assets', req, tasks.assets);
gulp.task('css', req.concat(['less', 'sass']), tasks.css);
gulp.task('less', req, tasks.less);
gulp.task('sass', req, tasks.sass);
gulp.task('browserify', req, tasks.browserify);
gulp.task('lintjs', tasks.lintjs);
gulp.task('concatJs', req, tasks.concatJs);
gulp.task('images', req, tasks.images);
gulp.task('clean_image_opts', req, tasks.clean_image_opts);
gulp.task('fonts', req, tasks.fonts);
gulp.task('nsp', tasks.nsp);
gulp.task('karma', tasks.karma);
gulp.task('base64', req.concat(['sass']), tasks.base64);
gulp.task('inlineCss', req.concat(['sass']), tasks.inlineCss);
gulp.task('adminAssets', req, tasks.adminAssets);
gulp.task('adminSass', req, tasks.adminSass);
gulp.task('adminCss', req.concat(['adminSass']), tasks.adminCss);
gulp.task('preloadNgHtml', req, tasks.preloadNgHtml);
gulp.task('adminConcatJs', req.concat(['preloadNgHtml']), tasks.adminConcatJs);

// build task
gulp.task('build', [
  'assets',
  'less',
  'sass',
  'css',
  'concatJs',
  'images',
  'fonts',
  'inlineCss',
  'adminAssets',
  'adminSass',
  'adminCss',
  'adminConcatJs'
]);

// test task
gulp.task('test', [
  'lintjs',
  'nsp',
  'karma'
]);

// watch task
gulp.task('watch', ['build'], function () {
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.less, ['css']);
  gulp.watch(paths.sass, ['css', 'inlineCss']);
  gulp.watch(paths.js_watch, ['concatJs']);
  gulp.watch(paths.admin.css, ['adminCss']);
  gulp.watch(paths.admin.sass, ['adminSass', 'adminCss']);
  gulp.watch(paths.admin.js_watch, ['adminConcatJs']);
  gulp.watch(paths.admin.partials, ['adminConcatJs']);
  gulp.watch(paths.inlineCss.html, ['inlineCss']);
  gulp.watch([paths.fonts + './fonts.list'], ['fonts']);
  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

gulp.task('default', ['watch']);
