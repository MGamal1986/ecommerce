import {addEvent} from './Functions.js';
function WishCartSelect(){
  // click event on wishlist and add-to-cart button
    // catch wishlist element
    const wishElements = document.querySelectorAll('.card .wishlist i');
    // add click event
    wishElements.forEach(btn=>{
      addEvent(btn,'click',(event)=>{
        event.target.parentElement.classList.toggle('selected');
      });
    })
  
    // catch add-to-cart element
    const addToCarts = document.querySelectorAll('.card .add-card i');
    // add click event
    addToCarts.forEach(btn=>{
      addEvent(btn,'click',(event)=>{
        event.target.parentElement.classList.toggle('selected');
      });
    })
}
export default WishCartSelect;