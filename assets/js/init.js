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