"use strict";var cartIcon=document.querySelector(".nav-header .user .cart"),cartContainer=document.querySelector(".nav-header .user .cart .cart-container");cartContainer.onclick=function(e){e.stopPropagation()},cartIcon.addEventListener("click",function(e){cartContainer.classList.toggle("hover-cart")});var cartIconClose=document.querySelectorAll(".nav-header .user .cart .close-x");cartIconClose.forEach(function(e){e.onclick=function(e){e.target.parentElement.parentElement.remove()}});var incrementBtn=document.querySelectorAll(".nav-header .user .cart .item i.fa-plus"),decrementBtn=document.querySelectorAll(".nav-header .user .cart .item i.fa-minus");incrementBtn.forEach(function(e){e.onclick=function(e){e.target.previousElementSibling.textContent++}}),decrementBtn.forEach(function(e){e.onclick=function(e){0<e.target.nextElementSibling.textContent&&e.target.nextElementSibling.textContent--}});var navigation=document.querySelector(".navigation");window.addEventListener("scroll",function(e){80<document.documentElement.scrollTop?navigation.classList.add("shad"):navigation.classList.remove("shad")});var windowSize,searchInput=document.querySelector(".nav-header input"),searchClass=searchInput.parentElement;window.addEventListener("load",function(e){windowSize=window.screen.width}),searchInput.addEventListener("focus",function(e){768<windowSize&&(searchClass.style.minWidth="440px")}),searchInput.addEventListener("blur",function(e){768<windowSize&&(searchClass.style.minWidth="240px")});var expandBtn=document.querySelector(".navbar-list .expand-icon"),expanMenu=document.querySelector(".navbar-list .expand-menu"),iconBtn=document.querySelector(".navbar-list .expand-icon i");expandBtn.addEventListener("click",function(e){expanMenu.classList.toggle("show"),iconBtn.classList.toggle("fa-bars"),iconBtn.classList.toggle("fa-times")}),document.body.addEventListener("click",function(e){!e.target.closest(".navigation")&&expanMenu.classList.contains("show")&&(expanMenu.classList.remove("show"),iconBtn.classList.toggle("fa-bars"),iconBtn.classList.toggle("fa-times"))});var subMenu=document.querySelector(".navbar-list .expand-menu .menu"),listPages=document.querySelector(".navbar-list .expand-menu .pages");listPages.addEventListener("click",function(e){subMenu.classList.toggle("expand"),e.target.classList.toggle("open")});var listCollect=document.querySelector(".navbar-list .expand-menu .collections"),collectionSubMenu=document.querySelector(".navbar-list .expand-menu .menu-collections");listCollect.addEventListener("click",function(e){collectionSubMenu.classList.toggle("expand"),e.target.classList.toggle("open"),expanMenu.classList.toggle("scroll-y")});var slider=tns({container:".slider-container",controls:!1,nav:!1,autoplay:!0,mouseDrag:!0,loop:!0,speed:300,gutter:20,responsive:{993:{items:4},767:{items:2},575:{items:1}}}),wishElements=document.querySelectorAll(".popular-products .slider-container .card .wishlist i");wishElements.forEach(function(e){e.onclick=function(e){e.target.parentElement.classList.toggle("selected")}});var addToCarts=document.querySelectorAll(".popular-products .slider-container .card .add-card i");addToCarts.forEach(function(e){e.onclick=function(e){e.target.parentElement.classList.toggle("selected")}});
//# sourceMappingURL=main.js.map
