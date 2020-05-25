// click on cart icon to popup cart section
// catch cart icon
const cartIcon = document.querySelector('.nav-header .user .cart');
// catch cart section
const cartContainer = document.querySelector('.nav-header .user .cart .cart-container');
cartContainer.onclick = (event)=>{
    event.stopPropagation();
}
cartIcon.addEventListener('click',(event)=>{
    cartContainer.classList.toggle('hover-cart');
})
// remove items form cart
// catch close btn for each item
const cartIconClose = document.querySelectorAll('.nav-header .user .cart .close-x');
cartIconClose.forEach((close)=>{
    close.onclick = (event)=>{
        event.target.parentElement.parentElement.remove();
    }
})

// add more than one items
// catch increment and decrement button
const incrementBtn = document.querySelectorAll('.nav-header .user .cart .item i.fa-plus');

const decrementBtn = document.querySelectorAll('.nav-header .user .cart .item i.fa-minus');

// add increment event
incrementBtn.forEach((btn)=>{
    btn.onclick = (event)=>{
        event.target.previousElementSibling.textContent ++;
    }
})
// add decrement event
decrementBtn.forEach((btn)=>{
    btn.onclick = (event)=>{
        if(event.target.nextElementSibling.textContent > 0 ){
            event.target.nextElementSibling.textContent --;
        }
    }
})




