const button_scroll = document.querySelector('.button_scroll_To_Top');
window.addEventListener('scroll', () => {

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {

        button_scroll.style.display = 'block';
    }
    else {
        button_scroll.style.display = 'none';
    }
})
button_scroll.addEventListener('click', () => {

    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})

/********DARK MODE METHODE*************/
function turnToDark() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

/********HIDE NAV BAR*************/

/*var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("Container_Menu").style.top = "0";
    } else {
        document.getElementById("Container_Menu").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
}*/

/*window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("Container_Menu").style.top = "0";
    } else {
        document.getElementById("Container_Menu").style.top = "-70px";
    }
}*/