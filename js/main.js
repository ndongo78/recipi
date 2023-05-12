import  {logger} from "../js/logger.js";

$(document).ready(function() {
    $("#about").load("../components/about.html")
    $("#menu").load("../components/menu.html")
  $(".detail").slideDown();
   $("#menuBtn").click(function (e) {
      $("#menuLinks li").toggle()
      $("#menuLinks").fadeToggle("slow")
   })


})

$(window).scroll(function() {
   var scrollTop = $(this).scrollTop();
   if (scrollTop > 200) {
      $('.descript').addClass('animate');
      $(".imgContainer img").addClass('animate2')
      $(".descript").addClass('moveFromRight')
   } else {
      $('.descript').removeClass('animate');
      $('.imgContainer img').removeClass('animate2');
      $('.descript').removeClass('moveFromRight');
   }
});
