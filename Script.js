// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//         document.querySelector(".Container_Menu").style.top = "0";
//     } else {
//         document.querySelector(".Container_Menu").style.top = "-270px";
//     }
// }

//hide menu on scroll

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".Container_Menu").style.top = "0";
  } else {
    document.querySelector(".Container_Menu").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//     document.querySelector(".Container_Menu").style.padding = "10px 9px";
//     document.querySelector(".logo").style.fontSize = "15px";
//   } else {
//     document.querySelector(".Container_Menu").style.padding = "10px 9px";
//     document.querySelector(".logo").style.fontSize = "15px";
//   }
// }