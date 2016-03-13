var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var config = require('./config/bundle.json');

gulp.task('bundle', ['unbundle'], function() {
    return bundler.bundle(config);
});
