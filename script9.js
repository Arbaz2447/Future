let burger=document.querySelector(".burger");


let navbar=document.querySelector(".navigation-bar");
let navlist=document.querySelector(".navigation-area");
let active=document.getElementsByClassName("active")[0]

burger.addEventListener("click",(e)=>{
   navbar.classList.toggle('outer');
   navlist.classList.toggle('inner');

})
active.addEventListener("click",(e)=>{
   navbar.classList.remove('outer');
   navlist.classList.remove('inner');

})