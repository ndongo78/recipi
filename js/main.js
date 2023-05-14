import  {logger} from "../js/logger.js";
import {menuItems} from "../js/menu.js"



$(document).ready(function() {
    $("#about").load("../components/about.html")
    $("#reservaton").load("../components/reservation.html")
   // $("#avis").load("../components/avis.html")
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



     const template = `<div class=" shadow-xl bg-[#444] animate  w-[220px] m-6 rounded">
  <img src=${item.image} alt=${item.title} class="cardImage w-full h-32 object-cover rounded"/>
  <div class="w-full mt-2">
    <h2 class="text-[#ccc] mt-3 ml-2 text-2xl"> ${item.title} </h2>
    <div class="flex flex-row mt-3 mb-3 ml-2 w-full items-center">
      <i class="material-icons text-[#ccc]">access_time</i>
      <p class="text-[#ccc] text-xl ml-3">15mn</p>
    </div>
    <div class="w-full flex justify-between m-2">
      <p class="text-[#ccc]">${start}</p>
      <a class="text-xl mr-3 text-yellow-500 cursor-pointer">commander</a>
    </div>
  </div>
</div>`;

     const container = $("#cardContainer");
     const card = $(template);
     container.append(card); // Ajouter la carte au conteneur

 }

const crasouselItems=$(".carousel").children;
const items=document.querySelector(".carousel").children


let currentIndex=0;
$("#btn1").click((e)=>{
 const index=$("#btn1").attr("tabindex")
    for (let i=0; i<items.length; i++){
        items[i].classList.remove("active")
    }
    items[index].classList.add("active")
})
$("#btn2").click((e)=>{
 const index=$("#btn2").attr("tabindex")
    for (let i=0; i<items.length; i++){
        items[i].classList.remove("active")
    }
    items[index].classList.add("active")
})
$("#btn3").click((e)=>{
 const index=$("#btn3").attr("tabindex")
    for (let i=0; i<items.length; i++){
        items[i].classList.remove("active")
    }
    items[index].classList.add("active")
})

$('.item').addClass('moveFromRight');

$(window).scroll(function() {
   var scrollTop = $(this).scrollTop();
   if (scrollTop > 200) {
      $('.descript').addClass('animate');
      $(".imgContainer img").addClass('animate2')
      $(".descript").addClass('moveFromRight')
      $("#cardContainer").addClass('moveFromBottom')
   } else {
      $('.descript').removeClass('animate');
      $('.imgContainer img').removeClass('animate2');
      $('.descript').removeClass('moveFromRight');
      $('#cardContainer').removeClass('moveFromBottom');
   }
    let x=0;
    let timer=0;
   function changeContainer() {
       const container=document.querySelector(".gallery")
       /*container.style.transform=`perspective(1000px) rotateX(${x}deg`*/
       $(".gallery").css("transform", `perspective(1000px) rotateY(${x}deg`);
       timer=setTimeout(()=>{
        changeContainer()
       },2000)
   }


   $(".prev").click((e)=>{
       x=x-45;
       clearTimeout(timer)
       changeContainer()
   })
    $(".next").click((e)=>{
        x=x+45;
        clearTimeout(timer)
       changeContainer()
   })
});
