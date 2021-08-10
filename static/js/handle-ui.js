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
        e.preventDefault();
        let xNew = e.clientX - productsSlide.offsetLeft;
        xCurrent += -Math.round((xNew - xDown));
        if (xCurrent > productsSlide.scrollWidth) {
            xCurrent = productsSlide.scrollWidth;
        }
        if (xCurrent < 0)
        {
            xCurrent = 0;
        }
        productsSlide.scrollLeft = xCurrent;
        xDown = xNew;
    }
    
});
  
window.addEventListener('mouseup', e => {
    isDrag = false;
});

productsSlide.addEventListener('mouseup', e => {
    isDrag = false;
});
