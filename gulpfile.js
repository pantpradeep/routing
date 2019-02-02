// I don't feel like writing var everytime
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

    	
var browserSync = require("browser-sync").create();

// Define tasks after requiring dependencies
function style() {
  // Where should gulp look for the sass files?
  // My .sass files are stored in the styles folder
  // (If you want to use scss files, simply look for *.scss files instead)
  return (
      gulp
          .src("src/sass/**/*.sass")
          // Initialize sourcemaps before compilation starts
          .pipe(sourcemaps.init())
          // Use sass with the files found, and log any errors
          .pipe(sass())
          .on("error", sass.logError)
          // Use postcss with autoprefixer and compress the compiled file using cssnano
          .pipe(postcss([autoprefixer(), cssnano()]))
          // What is the destination for the compiled file?
          .pipe(sourcemaps.write())
          .pipe(gulp.dest("src/css"))
          .pipe(browserSync.stream())
  );
}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;

function watch(){
  // gulp.watch takes in the location of the files to watch for changes
  // and the name of the function we want to run on change
  gulp.watch('src/sass/**/*.sass', style)
}
  
// Don't forget to expose the task!
exports.watch = watch
  