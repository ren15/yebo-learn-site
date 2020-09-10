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