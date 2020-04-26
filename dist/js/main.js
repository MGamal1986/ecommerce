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
});