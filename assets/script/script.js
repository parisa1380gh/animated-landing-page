$(document).read(function(){
    $(function() {  

        // Default
        // jQuery.scrollSpeed(100, 800);
        
        // Custom Easing
        jQuery.scrollSpeed(2000, 2000, 'easeOutCubic');
        
    });
})

function randomInt(outerMin, outerMax, innerMin, innerMax)
{
    var usableRange = innerMin - outerMin + outerMax - innerMax,
    threshold = innerMin - outerMin,
    num = Math.floor(Math.random() * (usableRange + 1));

    if (num < threshold) {
        return num - threshold;
    } else {
        return num - threshold + innerMax;
    }
}
// console.log(`${randomInt(0, window.innerWidth, 0, window.innerWidth=window.innerWidth-500)}px`);

let circle=document.getElementsByClassName('circle');

for (let index = 0; index < circle.length; index++) {
    const element = circle[index];
    $(`.circle:nth-child(${index})`).css('left',`${randomInt(0, window.innerWidth, 0, window.innerWidth=window.innerWidth-500)}px`)
    $(`.circle:nth-child(${index})`).css('top',`${randomInt(0, window.innerHeight, 0, window.innerHeight=window.innerHeight-500)}px`)    
    $(`.circle:nth-child(${index})`).css('width',`${randomInt(0, 1500, 0, 2000)}px`)
    $(`.circle:nth-child(${index})`).css('height',`${randomInt(0, window.innerHeight, 0, window.innerHeight=window.innerHeight-500)}px`)
}



// var somEl=document.getElementById('container-landing');



//     var speed = somEl.addEventListener(
//         "DOMMouseScroll", wheelDistance);
 
 
//         window.addEventListener("DOMMouseScroll", handleScroll);
//         window.addEventListener("mousewheel", handleScroll);
  
//         function wheelDistance(e) {
//             console.log(e);
//             if (!e) {
//                 e = window.event;
//             }
//             var w = e.wheelDelta,
//                 d = e.detail;
//             if (d) {
//                 return -d / 3; // Firefox;
//             }
  
//             // IE, Safari, Chrome & other browsers
//             return w / 120;
//         }
  
//         function handleScroll(e) {
//             var delta = wheelDistance(e);
//             console.log(delta);
//             var time = 1000;
//             var distance = 200;
  
//             $('html, body').stop().animate({
//                 scrollTop: $(window).scrollTop()
//                           - (distance * delta)
//             }, time);
//         }
