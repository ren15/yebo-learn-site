function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

window.addEventListener('scroll', function() {
const coordY = getCoords(document.querySelector('#description-main')).top
    if (window.innerWidth > 440) {
        document.querySelector('.menu').style.backgroundColor = 'transparent ';
        document.querySelector('.menu').style.backgroundPosition = 'center 35px'
        document.querySelector('.menu').style.padding = '60px 0px'
        if (window.pageYOffset >= coordY) {
            document.querySelector('.menu').style.backgroundColor = 'rgba(247, 247, 247, 0.7)';
            document.querySelector('.menu').style.backgroundPosition = 'center'
            document.querySelector('.menu').style.padding = '40px 0px'
        }
    } else {
        document.querySelector('.menu').style.background = 'url(/img/Logo-menu.png) center 35px no-repeat';
        if (window.pageYOffset >= coordY) {
            document.querySelector('.menu').style.background = 'transparent';

        }
    }
  });

window.addEventListener('resize',function(){
    if (window.innerWidth < 440) {
        document.querySelector('.menu').style.padding = '0px'
    } else {
         document.querySelector('.menu').style.background = 'url(/img/Logo-menu.png) center 35px no-repeat';
         document.querySelector('.menu').style.backgroundPosition = 'center 35px'
         document.querySelector('.menu').style.padding = '60px 0px'
    }
});
