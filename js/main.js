import  {logger} from "../js/logger.js";
import {menuItems} from "../js/menu.js"



$(document).ready(function() {
    $("#about").load("../components/about.html")
    //$("#menu").load("../components/menu.html")
  $(".detail").slideDown();
   $("#menuBtn").click(function (e) {
      $("#menuLinks li").toggle()
      $("#menuLinks").fadeToggle("slow")
   })




})

function getStarsFromRating(rating) {
  const fullStar = '\u2605'; // unicode de l'étoile pleine
  const emptyStar = '\u2606'; // unicode de l'étoile vide
  const maxRating = 5; // note maximale
  const fullStars = Math.round(rating * 2) / 2; // arrondi à 0.5 près
  const emptyStars = maxRating - fullStars;
  return fullStar.repeat(fullStars) + emptyStar.repeat(emptyStars);
}


menuItems.forEach(item=>render(item))
  //render card
 function render(item){
  const start=getStarsFromRating(item.note);

   logger(start)
   
   const template=`<div class="   mt-8 shadow-xl bg-[#222] mr-3 w-[220px]">
    <img src=${item.image} alt=${item.title} class="cardImage w-full h-32 object-cover rounded"/>
    <div class="bg-black w-full mt-2">
    <h2 class="text-[#ccc] mt-3"> ${item.title} </h2>
    <div class="flex flex-row mt-3 mb-3 w-full">
    <i class="material-icons text-[#ccc]">access_time</icon>
 <p class="text-yellow-600">15mn</p>
    </div>
    <div class="w-full">
    <p class="text-[#ccc]">${start}</p>
    <div class="text-white">Commander</div>
    </div>
    </div>
   </div>`;


 //div.css("background-color","red")

   $("#cardContainer").append(template)
 }
  


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
