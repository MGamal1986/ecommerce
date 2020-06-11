// catch list span
const listSpan = document.querySelector('.menu .menu-head');
// catch sort by menu
const sortMenu = document.querySelector('.menu .menu-list');
// catch angle down menu
const angleMenu = document.querySelector('.menu .menu-head i');
// catch sort by menu item
const sortMenuItem = document.querySelectorAll('.menu .menu-list .menu-item');

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