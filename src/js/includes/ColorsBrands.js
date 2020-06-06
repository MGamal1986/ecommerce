// select elements 
const colorBrands = document.querySelectorAll('.products .color');

export default function ColorBrands(){
    colorBrands.forEach((color)=>{
        color.style.background = color.dataset.color;
    })
}