document.addEventListener('DOMContentLoaded', function () {
    const sideNav = document.querySelector('.sidenav');
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
});
// const timelin = document.getElementsByClassName('timeline');
// console.log(timelin);
window.addEventListener('scroll', function () {
    const timelin = document.querySelectorAll('.timeline');
    let scrollPosY = window.pageYOffset | document.body.scrollTop;
    // console.log('scrollpsy : ' + scrollPosY);
    // console.log('elemnt : ' + hT);
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 992) {
        timelin.forEach(e => {
            this.console.log(e);
            if (scrollPosY >= (e.offsetTop - 300)) {
                e.classList.add('downline');
            }
        });
    }
})

// $(window).scroll(function () {
//     var hT = $('#scroll-to').offset().top,
//         hH = $('#scroll-to').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     if (wS > (hT + hH - wH)) {
//         console.log('H1 on the view!');
//     }
// });