import {addEvent} from './Functions.js';
function Wish(){
    // click on widh icon to popup wish section
    // catch cart icon
    const wishIcon = document.querySelector('.nav-header .user .like');
    // catch cart section
    const wishContainer = document.querySelector('.nav-header .user .like .wish-container');
    // stop propagation of click event on wish container
    addEvent(wishContainer,'click',(event)=>{
        event.stopPropagation();
    })
    // add click event to wish icon 
    addEvent(wishIcon,'click',(event)=>{
        wishContainer.classList.toggle('hover-wish');
    })
    
    // remove items form wishlist
    // catch close btn for each item
    const wishIconClose = document.querySelectorAll('.nav-header .user .like .close-x');
    wishIconClose.forEach((close)=>{
        addEvent(close,'click',(event)=>{
            event.target.parentElement.parentElement.remove();
        })
    })
}
export default Wish;

