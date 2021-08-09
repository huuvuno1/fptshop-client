// handle slide
let isDrag = false;
let x = 0;
let y = 0;
let xCurrent = 0;
let xDown = 0;
const productsSlide = document.querySelector('#slide_proc');
let widthSlide = productsSlide.scrollWidth;

productsSlide.addEventListener('mousedown', e => {
    xDown = e.clientX - productsSlide.offsetLeft;
    isDrag = true;
    console.log("xdowm", xDown)
});
  
productsSlide.addEventListener('mousemove', e => {
    if (isDrag) {
        let xNew = e.clientX - productsSlide.offsetLeft;
        xCurrent += -Math.round((xNew - xDown));
        if (xCurrent > widthSlide) {
            xCurrent = widthSlide;
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
    console.log("nahc chuot")
});
