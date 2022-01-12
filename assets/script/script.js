

function wheel(event) {
    console.log(event);
    // var delta = 0;
    // if (event.wheelDelta) {(delta = event.wheelDelta / 1000);}
    // else if (event.detail) {(delta = -event.detail / 3);}

    // handle(delta);
    // if (event.preventDefault) {(event.preventDefault());}
    // event.returnValue = false;
}

// function handle(delta) {
//     var time = 1000;
//     var distance = 300;

//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }

// if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel(window.event), false);}
//   window.onmousewheel = document.onmousewheel = wheel;
let value3 = Math.floor(Math.random() * 20);

let circle=document.getElementsByClassName('circle');

for (let index = 0; index < circle.length; index++) {
    const element = circle[index];
    $(element).style('width',`${value3}px`)
    $(element).style('height',`${value3}px`)
}

var somEl=document.getElementById('container-landing');



    var speed = somEl.addEventListener(
        "DOMMouseScroll", wheelDistance);
 
 
        window.addEventListener("DOMMouseScroll", handleScroll);
        window.addEventListener("mousewheel", handleScroll);
  
        function wheelDistance(e) {
            console.log(e);
            if (!e) {
                e = window.event;
            }
            var w = e.wheelDelta,
                d = e.detail;
            if (d) {
                return -d / 3; // Firefox;
            }
  
            // IE, Safari, Chrome & other browsers
            return w / 120;
        }
  
        function handleScroll(e) {
            var delta = wheelDistance(e);
            console.log(delta);
            var time = 1000;
            var distance = 200;
  
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop()
                          - (distance * delta)
            }, time);
        }
