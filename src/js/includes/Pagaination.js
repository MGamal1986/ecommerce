import {addEvent} from './Functions';
// select elments
const pagesLinks = document.querySelectorAll('.pages .page-link.layouts');
const pagesItems = document.querySelectorAll('.pages .page-item');
const nextBtn = document.querySelector('.pages .page-link.next');
const previousBtn = document.querySelector('.pages .page-link.previous');
// const pagesContainer = document.querySelector('.pages .pagination');
let pagesLength = pagesLinks.length;

// create nextToggle function
let nextToggle = (pages,length)=>{
    let order;
    pages.forEach((page,index)=>{
        if(page.classList.contains('active')){
            order = index;
        }
    })
    order +=1;
    if(order < length){
        pages.forEach(page=>{
            page.classList.remove('active')
        })
        pages[order].classList.add('active');
    }
}

// create prevToggle function
let prevToggle = (pages,length)=>{
    let order;
    pages.forEach((page,index)=>{
        if(page.classList.contains('active')){
            order = index;
        }
    })
    order -=1;
    if(order >= 0){
        pages.forEach(page=>{
            page.classList.remove('active')
        })
        pages[order].classList.add('active');
    }
}

// create active function
let makeActive = (element,pageElements)=>{
    pageElements.forEach((item,index)=>{
        item.classList.remove('active');
    })
    element.classList.add('active');
}




function Pagination(){
    pagesLinks.forEach(page=>{
        addEvent(page,'click',(event)=>{
            event.preventDefault();
            makeActive(event.target,pagesLinks);
        })
    })
    addEvent(nextBtn,'click',(event)=>{
        event.preventDefault();
        nextToggle(pagesLinks,pagesLength);
    })
    addEvent(previousBtn,'click',(event)=>{
        event.preventDefault();
        prevToggle(pagesLinks,pagesLength);
    })
}
export default Pagination;