var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var config = require('./config/bundle.json');

gulp.task('unbundle', function() {
    return bundler.unbundle(config);
});