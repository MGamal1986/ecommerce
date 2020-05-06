"use strict";

// add scroll event for body
// catch navigation element
var navigation = document.querySelector('.navigation');
window.addEventListener('scroll', function (e) {
  if (document.documentElement.scrollTop > 350) {
    navigation.classList.add('shad');
  } else {
    navigation.classList.remove('shad');
  }
}); // on focus increase width of search input
// catch input 

var searchInput = document.querySelector('.nav-header input');
var searchClass = searchInput.parentElement; // add focus event

searchInput.addEventListener('focus', function (e) {
  searchClass.style.minWidth = "440px";
}); // add blur event

searchInput.addEventListener('blur', function (e) {
  searchClass.style.minWidth = "240px";
}); // add click event to burger icon in navbar
// catch burger icon

var expandBtn = document.querySelector('.navbar-list .expand-icon'); // catch expan menu

var expanMenu = document.querySelector('.navbar-list .expand-menu'); // catch fontawsome icon in expand button

var iconBtn = document.querySelector('.navbar-list .expand-icon i'); // add click event to show expand menu

expandBtn.addEventListener('click', function (event) {
  expanMenu.classList.toggle('show'); // expandBtn.classList.toggle('back');

  iconBtn.classList.toggle('fa-bars');
  iconBtn.classList.toggle('fa-times');
}); // close expand menu

document.body.addEventListener('click', function (event) {
  if (!event.target.closest('.navigation') && expanMenu.classList.contains('show')) {
    expanMenu.classList.remove('show'); // expandBtn.classList.toggle('back');

    iconBtn.classList.toggle('fa-bars');
    iconBtn.classList.toggle('fa-times');
  }
}); // expand submenu 
// catch submenu

var subMenu = document.querySelector('.navbar-list .expand-menu .menu'); // catch pages list item

var listPages = document.querySelector('.navbar-list .expand-menu .pages');
listPages.addEventListener('click', function (e) {
  subMenu.classList.toggle('expand');
}); // catch collection list item

var listCollect = document.querySelector('.navbar-list .expand-menu .collections'); // catch collections submenu

var collectionSubMenu = document.querySelector('.navbar-list .expand-menu .menu-collections'); // add click event on collection list item

listCollect.addEventListener('click', function (event) {
  collectionSubMenu.classList.toggle('expand');
  expanMenu.classList.toggle('scroll-y');
}); // open cart page
// catch cart element

var cartElement = document.querySelector('.nav-header .user .cart'); // catch overlay layer

var overlay = document.querySelector('nav .overlay'); // catch cart icon in overlay layer

var cartIcon = document.querySelector('nav .cart-container .cart-icon'); // catch cart contianer in overlay layer

var cartContainer = document.querySelector('nav .cart-container');
cartElement.addEventListener('click', function (event) {
  overlay.classList.add('overhead');
  setTimeout(function () {
    cartContainer.classList.add('appear');
  }, 10);
});
cartIcon.addEventListener('click', function (event) {
  cartContainer.classList.remove('appear');
  setTimeout(function () {
    overlay.classList.remove('overhead');
  }, 400);
}); // catch close x in cart container in samll screen

var cartCloseX = document.querySelector('nav .cart-container .close-x'); // add click event to close cart pagein samll screen

cartCloseX.addEventListener('click', function (event) {
  cartContainer.classList.remove('appear');
  setTimeout(function () {
    overlay.classList.remove('overhead');
  }, 400);
}); // add click event on overlay layer

overlay.addEventListener('click', function (event) {
  if (!event.target.closest('.cart-container')) {
    cartContainer.classList.remove('appear');
    setTimeout(function () {
      overlay.classList.remove('overhead');
    }, 400);
  }
});