// handle slide
let isDrag = false;
let xCurrent = 0;
let xDown = 0;
const productsSlide = document.querySelector('#slide_proc');

productsSlide.addEventListener('mousedown', e => {
    xDown = e.clientX - productsSlide.offsetLeft;
    isDrag = true;
});
  
productsSlide.addEventListener('mousemove', e => {
    if (isDrag) {
        let xNew = e.clientX - productsSlide.offsetLeft;
        xCurrent += -Math.round((xNew - xDown));
        if (xCurrent > productsSlide.scrollWidth) {
            xCurrent = productsSlide.scrollWidth;
        }
        if (xCurrent < 0)
        {
            xCurrent = 0;
        }
        productsSlide.style = "scroll-behavior: unset;";
        productsSlide.scrollLeft = xCurrent;
        xDown = xNew;
        e.preventDefault();
    }
    
});
  
window.addEventListener('mouseup', e => {
    isDrag = false;
});

productsSlide.addEventListener('mouseup', e => {
    isDrag = false;
});



// next list product in list promotion
document.querySelector("body > div.app > div.container.flex.frame.promotion_frame > div.slide_arrow.slide_arrow-right")
    .addEventListener('click', () => {
        productsSlide.style = "scroll-behavior: smooth;";
        productsSlide.scrollLeft += productsSlide.scrollWidth/4;
    })
    
document.querySelector("body > div.app > div.container.flex.frame.promotion_frame > div.slide_arrow.slide_arrow-left")
    .addEventListener('click', () => {
        productsSlide.style = "scroll-behavior: smooth;";
        productsSlide.scrollLeft -= productsSlide.scrollWidth/4;
})