import $ from "jquery";

$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});
$(function () {
  $('a.page-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (
      window.location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      window.location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          { scrollTop: target.offset().top - 85 },
          1200,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
});
