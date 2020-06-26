// import modules
import RadioSelect from './includes/radioButtonSelect';
import Cart from './includes/Cart.js';
import MainScroll from './includes/MainScroll.js';
import Nav from './includes/Nav.js';
import Scrollup from './includes/Scrollup.js';
import WishCartSelect from './includes/WishCartSelect';
import Wish from './includes/Wish.js';
import SortMenu from './includes/ShopSortBy';
import { addEvent , ColorChange } from './includes/Functions';
import CheckLocal from './includes/LocalStorage';

// select elements
// catch list span
const listSpan = document.querySelector('.menu .menu-head');
// catch sort by menu
const sortMenu = document.querySelector('.menu .menu-list');
// catch angle down menu
const angleMenu = document.querySelector('.menu .menu-head i');
// catch sort by menu item
const sortMenuItem = document.querySelectorAll('.menu .menu-list .menu-item');
// select check box in billing info section
const checkBoxs = document.querySelectorAll('.checkout-details .billing-info .blue-square');
checkBoxs.forEach((box)=>{
    addEvent(box,'click',(event)=>{
        event.target.classList.toggle('clicked');
    })
})

SortMenu(listSpan,sortMenu,angleMenu,sortMenuItem);

RadioSelect();

CheckLocal();

Cart();
MainScroll();
Nav();
Scrollup();
WishCartSelect();
Wish();