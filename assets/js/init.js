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


    var circleProgress = (function (selector) {
        var wrapper = document.querySelectorAll(selector);
        Array.prototype.forEach.call(wrapper, function (wrapper, i) {
            var wrapperWidth,
                wrapperHeight,
                percent,
                innerHTML,
                context,
                lineWidth,
                centerX,
                centerY,
                radius,
                newPercent,
                speed,
                from,
                to,
                duration,
                start,
                strokeStyle,
                text;

            var getValues = function () {
                wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);
                wrapperHeight = wrapperWidth;
                percent = wrapper.getAttribute('data-cp-percentage');
                innerHTML = '<span class="percentage"><strong>' + percent + '</strong> %</span><canvas class="circleProgressCanvas" width="' + (wrapperWidth * 2) + '" height="' + wrapperHeight * 2 + '"></canvas>';
                wrapper.innerHTML = innerHTML;
                text = wrapper.querySelector(".percentage");
                canvas = wrapper.querySelector(".circleProgressCanvas");
                wrapper.style.height = canvas.style.width = canvas.style.height = wrapperWidth + "px";
                context = canvas.getContext('2d');
                centerX = canvas.width / 2;
                centerY = canvas.height / 2;
                newPercent = 0;
                speed = 1;
                from = 0;
                to = percent;
                duration = 1000;
                lineWidth = 25;
                radius = canvas.width / 2 - lineWidth;
                strokeStyle = wrapper.getAttribute('data-cp-color');
                start = new Date().getTime();
            };

            function animate() {
                requestAnimationFrame(animate);
                var time = new Date().getTime() - start;
                if (time <= duration) {
                    var x = easeInOutQuart(time, from, to - from, duration);
                    newPercent = x;
                    text.innerHTML = Math.round(newPercent) + " %";
                    drawArc();
                }
            }

            function drawArc() {
                var circleStart = 1.5 * Math.PI;
                var circleEnd = circleStart + (newPercent / 50) * Math.PI;
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(centerX, centerY, radius, circleStart, 4 * Math.PI, false);
                context.lineWidth = lineWidth;
                context.strokeStyle = "#ddd";
                context.stroke();
                context.beginPath();
                context.arc(centerX, centerY, radius, circleStart, circleEnd, false);
                context.lineWidth = lineWidth;
                context.strokeStyle = strokeStyle;
                context.stroke();

            }
            var update = function () {
                getValues();
                animate();
            }
            update();

            var btnUpdate = document.querySelectorAll(".btn-update")[0];
            btnUpdate.addEventListener("click", function () {
                wrapper.setAttribute("data-cp-percentage", Math.round(getRandom(5, 95)));
                update();
            });
            wrapper.addEventListener("click", function () {
                update();
            });

            var resizeTimer;
            window.addEventListener("resize", function () {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {
                    clearTimeout(resizeTimer);
                    start = new Date().getTime();
                    update();
                }, 250);
            });
        });

        //
        // http://easings.net/#easeInOutQuart
        //  t: current time
        //  b: beginning value
        //  c: change in value
        //  d: duration
        //
        function easeInOutQuart(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }

    });

    circleProgress('.counter');

    // Gibt eine Zufallszahl zwischen min (inklusive) und max (exklusive) zurück
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
});

var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

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