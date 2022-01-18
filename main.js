// Hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const showNav = document.querySelector(".navbar");

// toggle a new class in Hamburger and navigation menu divs

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("open");
  showNav.classList.toggle("open");
});

//Hide mobile menu when touched on anywhere on document except hamburger and Mobile view navbar and auto close navbar when clicked on link in navbar
document.addEventListener('click', function(e) {
  if (e.target.id !== "menu-bt" && e.target.id !== "navb") {
    menuBtn.classList.remove("open");
    showNav.classList.remove("open");
  }
});


//SLIDER
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var s = document.getElementsByClassName("slides");
  if (n > s.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = s.length }
  for (i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }
  s[slideIndex - 1].style.display = "block";
}