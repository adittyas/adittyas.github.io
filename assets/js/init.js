document.addEventListener("DOMContentLoaded", function () {
    const sideNav = document.querySelector(".sidenav");
    const slider = document.querySelectorAll(".slider");
    const select = document.querySelectorAll("select");
    const parallax = document.querySelectorAll(".parallax");
    const modal = document.querySelectorAll(".modal");
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
    // methods
    var sideMethods = M.Sidenav.getInstance(sideNav);

    const list = document.querySelectorAll('#slide-out li>a');
    list.forEach(e => {
        e.addEventListener('click', () => {
            return sideMethods.close();
        })
    });


});

window.addEventListener("scroll", function () {
    const timelin = document.querySelectorAll(".timeline");
    let scrollPosY = window.pageYOffset | document.body.scrollTop;

    var w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (w <= 992) {
        timelin.forEach(e => {
            if (scrollPosY >= e.offsetTop - 300) {
                e.classList.add("downline");
            }
        });
    }
});