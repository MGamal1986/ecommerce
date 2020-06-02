import {addEvent} from './Functions';
function Pagination(){
    const pagesLinks = document.querySelectorAll('.pages .page-link');
    const pagesItems = document.querySelectorAll('.pages .page-item');
    pagesLinks.forEach(page=>{
        addEvent(page,'click',(event)=>{
            event.preventDefault();
            
            if(!event.target.classList.contains('next') && !event.target.classList.contains('previous') ){
                pagesItems.forEach(item=>{
                    item.children[0].classList.remove('active');
                })
                event.target.classList.add('active');
            }
           
            
        })
    })
}
export default Pagination;