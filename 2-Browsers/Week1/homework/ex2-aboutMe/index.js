'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.body.style.fontFamily="Arial, sans-serif"
const nicKname = document.getElementById("nickname")
const favFood = document.getElementById("fav-food")
const homeTown = document.getElementById("hometown")
const textName = document.createTextNode("Os")
const textFood =document.createTextNode("meat")
const textTown =document.createTextNode("Cairo")
nicKname.appendChild(textName)
favFood.appendChild(textFood)
homeTown.appendChild(textTown)
const list=document.querySelectorAll("li")
list.forEach(element => {
   element.className="list-item"
})