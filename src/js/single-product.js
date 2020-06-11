// catch list span
const listSpan = document.querySelector('.menu.size .menu-head');
// catch sort by menu
const sortMenu = document.querySelector('.menu.size .menu-list');
// catch angle down menu
const angleMenu = document.querySelector('.menu.size .menu-head i');
// catch sort by menu item
const sortMenuItem = document.querySelectorAll('.menu.size .menu-list .menu-item');

// catch list span
const listSpan2 = document.querySelector('.menu.color .menu-head');
// catch sort by menu
const sortMenu2 = document.querySelector('.menu.color .menu-list');
// catch angle down menu
const angleMenu2 = document.querySelector('.menu.color .menu-head i');
// catch sort by menu item
const sortMenuItem2 = document.querySelectorAll('.menu.color .menu-list .menu-item');
// select add wish element
const addWish = document.querySelector('.single-product .info .icons .icon i');

import Cart from './includes/Cart.js';
import MainScroll from './includes/MainScroll.js';
import Nav from './includes/Nav.js';
import Scrollup from './includes/Scrollup.js';
import Slider from './includes/Slider.js';
import WishCartSelect from './includes/WishCartSelect';
import Wish from './includes/Wish.js';
import ShopSortBy from './includes/ShopSortBy';
import { addEvent , ColorChange } from './includes/Functions';

Cart();
MainScroll();
Nav();
Scrollup();
WishCartSelect();
Wish();
ShopSortBy(listSpan,sortMenu,angleMenu,sortMenuItem);
ShopSortBy(listSpan2,sortMenu2,angleMenu2,sortMenuItem2);

// add click event on add wish element
addEvent(addWish,'click',(event)=>{
    event.target.classList.toggle('select')
})
$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:true,
    dots: false,
    navText: ["",""],
    smartSpeed: 700
})