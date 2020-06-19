// catch list span
const listSpan = document.querySelector('.menu .menu-head');
// catch sort by menu
const sortMenu = document.querySelector('.menu .menu-list');
// catch angle down menu
const angleMenu = document.querySelector('.menu .menu-head i');
// catch sort by menu item
const sortMenuItem = document.querySelectorAll('.menu .menu-list .menu-item');


// select add wish element
const addWish = document.querySelectorAll('.product-list .wishlist i');
// select addcart element
const addCart = document.querySelectorAll('.product-list .add-card i');

import Cart from './includes/Cart.js';
import MainScroll from './includes/MainScroll.js';
import Nav from './includes/Nav.js';
import Scrollup from './includes/Scrollup.js';
import Slider from './includes/Slider.js';
import WishCartSelect from './includes/WishCartSelect';
import Wish from './includes/Wish.js';
import ShopSortBy from './includes/ShopSortBy.js';
import Pagination from './includes/Pagaination';
import ShopCategory from './includes/ShopCategory';
import Colors from './includes/ColorsBrands';
import RangeSlider from './includes/RangeSlider';
import CheckLocal from './includes/LocalStorage';
import AddWish from './includes/AddWish';
import AddCart from './includes/AddCart';
import {addEvent} from './includes/Functions';

CheckLocal();

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







Cart();
MainScroll();
Nav();
Scrollup();
WishCartSelect();
Wish();
ShopSortBy(listSpan,sortMenu,angleMenu,sortMenuItem);
Pagination();
ShopCategory();
Colors();
RangeSlider();