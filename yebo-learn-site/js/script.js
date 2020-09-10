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

const slider = document.querySelector('.slider')

const sliderElements = document.querySelectorAll('.slider__element')
const buttonList = document.querySelector('.button__list')

const changeSlide = (event) => {
  let sliderWidth = document.querySelector('.slider__element').offsetWidth
  const index = event.target.tabIndex
  const link = document.querySelectorAll('.button__list li')
  sliderWidth = (sliderWidth * index)
  console.log(sliderWidth)
  link.forEach((el, i) => {
    
    if (index == i && !el.classList.contains('active')) {
      el.classList.add('active')
    }
    else {
      el.classList.remove('active')
    } 
    sliderElements[i].style.left = `-${sliderWidth}px`
  }) 
}
sliderElements.forEach((el, i)=>{
  const li = document.createElement('li')
  buttonList.appendChild(li)
  li.addEventListener("click", changeSlide)
  li.tabIndex = i
  const act = (i==0) ? (() => li.className = "active")() : ''
})