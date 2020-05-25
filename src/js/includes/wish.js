// click on widh icon to popup wish section
// catch cart icon
const wishIcon = document.querySelector('.nav-header .user .like');
// catch cart section
const wishContainer = document.querySelector('.nav-header .user .like .wish-container');
wishContainer.onclick = (event)=>{
    event.stopPropagation();
}
wishIcon.addEventListener('click',(event)=>{
    wishContainer.classList.toggle('hover-wish');
})

// remove items form wishlist
// catch close btn for each item
const wishIconClose = document.querySelectorAll('.nav-header .user .like .close-x');
wishIconClose.forEach((close)=>{
    close.onclick = (event)=>{
        event.target.parentElement.parentElement.remove();
    }
})

