import {addEvent} from './Functions.js';

function Cart(){
    // click on cart icon to popup cart section
    // catch cart icon
    const cartIcon = document.querySelector('.nav-header .user .cart');
    // catch cart section
    const cartContainer = document.querySelector('.nav-header .user .cart .cart-container');
    
    // add click event using addEvent function
    addEvent(cartContainer,'click',(event)=>{
        event.stopPropagation();
    })
    addEvent(cartIcon,'click',(event)=>{
        cartContainer.classList.toggle('hover-cart');
    })
    

    // remove items form cart
    // catch close btn for each item
    const cartIconClose = document.querySelectorAll('.nav-header .user .cart .close-x');
    cartIconClose.forEach((close)=>{
        addEvent(close,'click',(event)=>{
            event.target.parentElement.parentElement.remove();
        })
    })


    // add more than one items
    // catch increment and decrement button
    const incrementBtn = document.querySelectorAll('.nav-header .user .cart .item i.fa-plus');

    const decrementBtn = document.querySelectorAll('.nav-header .user .cart .item i.fa-minus');

    // add increment event
    incrementBtn.forEach((btn)=>{
        addEvent(btn,'click',(event)=>{
            event.target.previousElementSibling.textContent ++;
        })
        
    })
    // add decrement event
    decrementBtn.forEach((btn)=>{
        addEvent(btn,'click',(event)=>{
            if(event.target.nextElementSibling.textContent > 1 ){
                event.target.nextElementSibling.textContent --;
            }
        })
    })

}
export default Cart;


