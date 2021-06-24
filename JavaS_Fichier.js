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
/* display on scroll*/

/*windows.addEventListener('scroll', reveal)

function reval() {

    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowsheight = windows.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect.top;
        let revealPoint = 150;

        if (revealTop < windowsheight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active')
        }
    }
}*/


/********HIDE NAV BAR*************/



/*window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("Container_Menu").style.top = "0";
    } else {
        document.getElementById("Container_Menu").style.top = "-70px";
    }
}*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("Container_Menu").style.top = "0";
    } else {
        document.getElementById("Container_Menu").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}