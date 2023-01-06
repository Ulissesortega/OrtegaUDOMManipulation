let wickedCss = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "heartBeat", "pulse", "rotation",
    "sideToSide", "zoomer", "zoomOut", "spinner", "wiggle", "shake", "pound", "slideUp", "slideDown",
    "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateInLeft", "rotateIn", "bounceIn"];

let btn2 = document.getElementById('btn2');    
let changed = true;
let cssSelected = Math.floor(Math.random() * wickedCss.length)
let btn3 = document.getElementById('btn3');

let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");

function myAlert(){
alert("Welcome to JS Object Dom Manipulation");
let userName = prompt("Please Enter your name");
if (userName == null || userName == "") {
  txt = "No Name Provided";
}else{
  txt = "Hello, " + userName + "!";
}
alert(txt);
}

btn2.addEventListener('click', () =>{
    if (changed) {
    test1.innerText = "I have now been changed \n Click Try me 1 more time";
    test1.className = "Change1";
    changed = false;
  } else{    
    location.reload();    
  } 
})


btn3.addEventListener('click', () =>{
  location.reload();    
})


btnOne.addEventListener("click", function(){  
  btnOne.innerText = "I have now been changed";
})

btnTwo.addEventListener("click", function(){
  btnTwo.innerText = "This is change with a class";
  btnTwo.className = "fantasyChange"
})

btnThree.addEventListener("mouseover", function(){
  btnThree.className = "change2" 
})

btnFour.addEventListener("mouseover", function(){
  bodybg.className = "body1" 

})
