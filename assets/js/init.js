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
    // const listMenu = sideNav.querySelectorAll('<a>');

    // var instance = M.Sidenav.getInstance(listMenu);
    // instance.close();

    // for (var i = 0; i < listMenu.length; i++) {
    //     console.log(listMenu[i]); //second console output
    //     // var instance = M.Sidenav.getInstance(listMenu[i]);
    // }
    // instance.close();
});