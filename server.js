const browserSync = require("browser-sync").create();

browserSync.init({
  // watch: true,
  files: ["assets/css/style.css", "assets/js/*.js", "index.html"],
  open: false,
  port: 8080,
  server: ".",
});
