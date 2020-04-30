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
  searchClass.style.width = "450px";
}); // add blur event

searchInput.addEventListener('blur', function (e) {
  searchClass.style.width = "240px";
}); // add click event to burger icon in navbar
// catch burger icon

var expandBtn = document.querySelector('.navbar-list .expand-icon'); // catch close button

var closeBtn = document.querySelector('.navbar-list .expand-icon.back'); // catch expan menu

var expanMenu = document.querySelector('.navbar-list .expand-menu'); // add click event to show expand menu

expandBtn.addEventListener('click', function (event) {
  expanMenu.classList.toggle('show');
  expandBtn.classList.toggle('back'); // expandBtn.classList.remove('boxy');
}); // add click event to close expand menu
// closeBtn.addEventListener('click',(event)=>{
//     expanMenu.classList.remove('show');
//     closeBtn.classList.remove('back');
//     expandBtn.classList.add('boxy');
// })
// close expand menu

document.body.addEventListener('click', function (event) {
  if (!event.target.closest('.navigation') && expanMenu.classList.contains('show')) {
    expanMenu.classList.remove('show');
    expandBtn.classList.toggle('back');
  }
}); // expand submenu 
// catch submenu

var subMenu = document.querySelector('.navbar-list .expand-menu .menu'); // catch pages list item

var listPages = document.querySelector('.navbar-list .expand-menu .pages');
listPages.addEventListener('click', function (e) {
  subMenu.classList.toggle('expand');
});