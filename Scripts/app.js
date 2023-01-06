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
let btnFive = document.getElementById("btnFive");
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function myAlert() {
  alert("Welcome to JS Object Dom Manipulation");
  let userName = prompt("Please Enter your name");
  if (userName == null || userName == "") {
    txt = "No Name Provided";
  } else {
    txt = "Hello, " + userName + "!";
  }
  alert(txt);
}

btn2.addEventListener('click', () => {
  if (changed) {
    test1.innerText = "I have now been changed \n Click Try me 1 more time";
    test1.className = "Change1";
    changed = false;
  } else {
    location.reload();
  }
})


btn3.addEventListener('click', () => {
  location.reload();
})


btnOne.addEventListener("click",  () => {
  btnOne.innerText = "I have now been changed";
})

btnTwo.addEventListener("click", () => {
  btnTwo.innerText = "This is change with a class";
  btnTwo.className = "fantasyChange"
})

btnThree.addEventListener("mouseover", () => {
  btnThree.className = "change2"
})

btnFour.addEventListener("click", () => {
  btnFour.innerText = "Tron Legacy \n https://ww7.0123movie.net/movie/tron-legacy-2556.html \n Click the play button once \n close the window that will open \n click play again :)";
})

btnFive.addEventListener("click", () => {
  title1.innerText = "Tron Legacy";
})


function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "Pause ⏸";
  } else {
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "Play ►";
  }
}

function stop() {
  playPause()
  audio.pause();
  audio.currentTime = 0;
  playPauseBTN.innerHTML = "Play ►";
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

