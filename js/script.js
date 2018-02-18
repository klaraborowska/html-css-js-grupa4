// hamburger menu

// open nav on click
document.querySelector(".menu-icon").addEventListener("click", function() {
    document.querySelector(".main-nav").classList.add("active");
    document.querySelector(".close-icon").classList.add("on");
    this.classList.add("off");
    color(".nav-color");
});

// close nav on click
document.querySelector(".close-icon").addEventListener("click", function() {
    closeNav();
});

// close nav, when screen is wider than 800px
window.onresize = function() {
    if (window.innerWidth >= 800) {
      closeNav();
    }
}

// topnav 

// change topnav on scroll
window.onscroll = function() {
    scrollFunction();
};


function closeNav() {
    document.querySelector(".main-nav").classList.remove("active");
    document.querySelector(".menu-icon").classList.remove("off");
    document.querySelector(".close-icon").classList.remove("on");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      setTimeout('changeColor(".nav-color")', 350);
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector(".top-nav").classList.add("nav-background");
      if (!document.querySelector(".main-nav").classList.contains("active")) {
        changeColor(".nav-color");
      }
  } else {
      document.querySelector(".top-nav").classList.remove("nav-background");
      color(".nav-color");
    }
}

function changeColor(x) {
    var elements = document.querySelectorAll(x);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "#222";
    }
}

function color(x) {
    var elements = document.querySelectorAll(x);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "#fff";
    }
}
