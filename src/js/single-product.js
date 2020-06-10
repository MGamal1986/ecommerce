import Cart from './includes/Cart.js';
import MainScroll from './includes/MainScroll.js';
import Nav from './includes/Nav.js';
import Scrollup from './includes/Scrollup.js';
import Slider from './includes/Slider.js';
import WishCartSelect from './includes/WishCartSelect';
import Wish from './includes/Wish.js';

Cart();
MainScroll();
Nav();
Scrollup();
WishCartSelect();
Wish();

$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:true,
    dots: false,
    navText: ["",""],
    smartSpeed: 700
})