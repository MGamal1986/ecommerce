import {addEvent} from './Functions.js';
function ShopSortBy(){
    // catch list span
    const listSpan = document.querySelector('.products .drop .menu .menu-head');
    // catch sort by menu
    const sortMenu = document.querySelector('.products .drop .menu .menu-list');
    // add click event to span list
    addEvent(listSpan,'click',(event)=>{
        sortMenu.classList.toggle('face');
    })
    // catch sort by menu item
    const sortMenuItem = document.querySelectorAll('.products .drop .menu .menu-list .menu-item');
    sortMenuItem.forEach(item=>{
        addEvent(item,'click',(event)=>{
            event.target.classList.toggle('active');
        })
    })
}
export default ShopSortBy;