$(function () {
  console.clear();
  const header = $(".header");
  const overlay = $(".overlay");

  $("#hamburgerBtn").click(function () {
    // console.log("Click");
    if (header.hasClass("open")) {
      // console.log("remove open class");
      header.removeClass("open");
      overlay.removeClass("fade-in");
      overlay.addClass("fade-out");
    } else {
      // console.log("add open class");
      header.addClass("open");
      overlay.removeClass("fade-out");
      overlay.addClass("fade-in");
    }
  });
});
