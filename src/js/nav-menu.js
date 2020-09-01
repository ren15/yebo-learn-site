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
