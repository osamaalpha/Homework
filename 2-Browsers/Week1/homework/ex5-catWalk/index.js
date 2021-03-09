'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing 
   for 5 seconds, and then replace the img with the original image and have it 
   continue the walk.
-----------------------------------------------------------------------------*/


const catImage = document.getElementsByTagName("img")[0]
catImage.style.left="0px"
const catScreen=window.innerWidth
const imgWidth= catImage.width
let crossedCenter;
function catWalk() {
  // TODO complete this function
 catImage.style.left=(parseInt(catImage.style.left) + 10) + "px"
 if(parseInt(catImage.style.left) > (window.innerWidth-catImage.width)){
   catImage.style.left = '0px'
   crossedCenter = false
 }
 if(!crossedCenter && parseInt(catImage.style.left) >= (catScreen-imgWidth)/2){
   crossedCenter= true
   clearInterval(timeUp)
   catImage.src="https://media1.tenor.com/images/21c7828fb688389650fc98881498fcc0/tenor.gif?itemid=15394423"
 setTimeout(function() {
        catImage.src="http://www.anniemation.com/clip_art/images/cat-walk.gif"
        timeUp=setInterval(catWalk,50)
}, 5000);
 }
 }
 let timeUp=setInterval(catWalk,50)
 window.addEventListener("load",catWalk)

// TODO execute `catWalk` when the browser has completed loading the page
