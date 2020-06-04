import {addEvent} from './Functions';

// select elements

const lineCategories = document.querySelectorAll('.products .lines .line .line-item');



function ShopCategory(){
    lineCategories.forEach((line)=>{
        
        addEvent(line,'click',(event)=>{
           event.target.parentElement.classList.toggle('active');
           event.target.classList.toggle('focus'); 
        })
    })

}

export default ShopCategory;