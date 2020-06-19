import Cart from './includes/Cart';
import MainScroll from './includes/MainScroll.js';
import Nav from './includes/Nav.js';
import Scrollup from './includes/Scrollup.js';
import Slider from './includes/Slider.js';
import WishCartSelect from './includes/WishCartSelect';
import Wish from './includes/Wish.js';

import CheckLocal from './includes/LocalStorage';
import {addEvent} from './includes/Functions';

import AddWish from './includes/AddWish';
import AddCart from './includes/AddCart';

// select add wish element
const addWish = document.querySelectorAll('.popular-products .wishlist i');
// select addcart element
const addCart = document.querySelectorAll('.popular-products .add-card i');


// create instance of addwish class that add products in wish list
let wish = new AddWish();
addWish.forEach((btn)=>{
    addEvent(btn,'click',(event)=>{
        event.target.classList.toggle('clicked');
        if(event.target.classList.contains('clicked')){
            wish.increase();
            wish.addLocal();
        }else{
            wish.decrease();
            wish.removeLocal();
        }
    })
})


// create instance of addcart class that add products in wish list
let cart = new AddCart();
addCart.forEach((btn)=>{
    addEvent(btn,'click',(event)=>{
        event.target.classList.toggle('clicked');
        if(event.target.classList.contains('clicked')){
            cart.increase();
            cart.addLocal();
        }else{
            cart.decrease();
            cart.removeLocal();
        }
    })
})

CheckLocal();
Cart();
MainScroll();
Nav();
Scrollup();
Slider();
WishCartSelect();
Wish();