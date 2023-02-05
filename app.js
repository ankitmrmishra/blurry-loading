const loadingText = document.querySelector('.count')
const bgimage = document.querySelector('.bg-image')

var load = 0 ;
var interval = setInterval(blurred , 30)

console.log(load)
function blurred() {
    load++ ;
    if (load > 99) {
        clearInterval(interval)
        
    }
    loadingText.innerHTML = `${load}%` 
    loadingText.style.opacity = scale(load , 0 , 100 , 1 , 0);
    bgimage.style.filter = `blur(${scale(load , 0 , 100 , 8, 0)}px)`
   
}

// The "scale" function maps a number from one range of values to another range of values.

// Given:

// number: the input number to be mapped to the new range.
// inMin: the minimum value of the current range.
// inMax: the maximum value of the current range.
// outMin: the minimum value of the target range.
// outMax: the maximum value of the target range.
// The function returns the mapped value of number to the target range [outMin, outMax]. This is done by first scaling the value of number from the current range [inMin, inMax] to a value between 0 and 1, then scaling it again to the target range.
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}