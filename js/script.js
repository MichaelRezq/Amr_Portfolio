// ---------------handling the up button-----------------------------------
let upButton = document.querySelector(".up");
// if the window hight is > 100vh display the up button else display none
window.onscroll = () => {
  if (window.scrollY >= window.innerHeight) {
    upButton.style.display = "flex";
  } else {
    upButton.style.display = "none";
  }
};
function handleUp() {
  console.log("clicked");
  window.scroll(0, 0);
}
// -----------------------handling the dark and white mode--------------------
let swapIcon = document.querySelector(".swapIcon");
function hanleDarkAndWhite() {
  // if the icon is moon  add class dark to the body
  if (swapIcon.classList.contains("fa-moon")) {
    // toggle the swap icon
    swapIcon.classList.remove("fa-moon");
    swapIcon.classList.add("fa-sun");
    // toggle the body class
    document.body.classList.remove("dark");
    document.body.classList.add("white");
  } else if (swapIcon.classList.contains("fa-sun")) {
    // toggle the swap icon
    swapIcon.classList.remove("fa-sun");
    swapIcon.classList.add("fa-moon");
    // toggle the body class
    document.body.classList.remove("white");
    document.body.classList.add("dark");
  }
}

// -------------------- when the page reloaded --------------------------

let screenReload = setTimeout(loadingAnimationFunction, 2000);
let loadingAnimation = document.querySelector(".loading");
let websiteContent = document.querySelector(".websiteContent");

function loadingAnimationFunction() {
  // display the page content and hide loading animation
  websiteContent.style.display = "block";
  loadingAnimation.style.display = "none";
}

// adding animation for each section when the scrollY
let allSections = document.querySelectorAll("section");
let proficiency = document.querySelector(".proficiency");
function scrollActive() {
  allSections.forEach((section) => {
    let a = document.querySelector(`#${section.id}Icon a`);
    if (
      window.pageYOffset > section.offsetTop - 58 &&
      window.pageYOffset <= section.offsetTop - 58 + section.offsetHeight
    ) {
      // console.log(section.getAttribute("id"));
      a.classList.add("active--link");
    } else {
      a.classList.remove("active--link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
