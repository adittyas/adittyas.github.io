document.addEventListener('DOMContentLoaded', function () {
    const sideNav = document.querySelectorAll('.sidenav');
    const slider = document.querySelectorAll('.slider');
    const select = document.querySelectorAll('select');
    const parallax = document.querySelectorAll('.parallax');
    const modal = document.querySelectorAll('.modal');
    M.Parallax.init(parallax);
    M.FormSelect.init(select);
    M.Sidenav.init(sideNav, {
        preventScrolling: false
    });
    M.Slider.init(slider, {
        indicators: false,
        height: 610
    });
    M.Modal.init(modal);

    // circle mode loading



});

var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};
(function () {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({
        top: originalTop,
        left: 0,
        behavior: 'smooth'
    });
    const checkIfDone = setInterval(function () {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}
// var hamburgers = document.querySelectorAll(".hamburger");
// if (hamburgers.length > 0) {
//     forEach(hamburgers, function (hamburger) {
//         hamburger.addEventListener(
//             "click",
//             function () {
//                 this.classList.toggle("is-active");
//             },
//             false
//         );
//     });
// }
// circle loading
// document.addEventListener("DOMContentLoaded", function () {

// });