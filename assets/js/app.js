$(".testimonial-slider").slick({
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

document.addEventListener("DOMContentLoaded", function () {

  const accordions = document.querySelectorAll(".accordian");
  accordions.forEach((acc) => {
    acc.classList.remove("active");
  });


  accordions.forEach((acc) => {
    const header = acc.querySelector(".accordian-header");
    const content = acc.querySelector(".accordian-content");

    header.addEventListener("click", function () {
      if (acc.classList.contains("active")) {
        acc.classList.remove("active");
      } else {
        accordions.forEach((a) => {
          if (a !== acc) {
            a.classList.remove("active");
          }
        });
        acc.classList.add("active");
      }
    });
  });
});

const navLinks = document.querySelectorAll(".header-nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const signUpBtns = document.querySelectorAll(".signUpBtn"); 
  const formBg = document.getElementById("formBg");
  const closeBtn = document.getElementById("closeBtn");

  
  signUpBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); 
      formBg.style.display = "flex";
    });
  });

  
  closeBtn.addEventListener("click", function () {
    formBg.style.display = "none"; 
  });

  
  window.addEventListener("click", function (event) {
    if (event.target === formBg) {
      formBg.style.display = "none";
    }
  });
});

document.getElementById("trialForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  window.location.href = 'thank-you.html';
});

// // Disable right-click (to prevent "Inspect" and copy-paste)
// // Prevent right-click context menu
// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// }, false);

// // Disable specific keyboard shortcuts like F12, Ctrl+Shift+I, etc.
// document.onkeydown = function (e) {
//   if (e.key === "F12" || 
//       (e.ctrlKey && e.shiftKey && e.key === "I") || 
//       (e.ctrlKey && e.shiftKey && e.key === "J") || 
//       (e.ctrlKey && e.shiftKey && e.key === "C") || // Block Ctrl+Shift+C
//       (e.ctrlKey && e.key === "U")) {
//       return false;
//   }
// };

// // Block developer tools detection
// (function() {
//   let element = new Image();
//   Object.defineProperty(element, 'id', {
//       get: function() {
//           window.location.reload();
//       }
//   });
//   console.log(element);
// })();
