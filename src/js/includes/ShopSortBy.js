import {addEvent} from './Functions.js';
function ShopSortBy(listSpan,sortMenu,angleMenu,sortMenuItem){
    addEvent(listSpan,'click',(event)=>{
        sortMenu.classList.toggle('face');
        angleMenu.classList.toggle('rotate');
    });
    sortMenuItem.forEach(item=>{
        // add click event to open sort by menu and rotate angle menu
        addEvent(item,'click',(event)=>{
            let elements = event.target.parentElement.children;
            // we use for of as HTMLCollection doesnot have forEach function but it has [symbol.iterator] key
            for(let el of elements){
                el.classList.remove('active');
                
            }
            event.target.classList.toggle('active');
            listSpan.children[0].textContent = event.target.textContent;
            sortMenu.classList.toggle('face');
            angleMenu.classList.toggle('rotate');
        })
    });
}
export default ShopSortBy;