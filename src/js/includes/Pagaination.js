import {addEvent} from './Functions';
function Pagination(){
    const pages = document.querySelectorAll('.pages .page-link');
    pages.forEach(page=>{
        addEvent(page,'click',(event)=>{
            event.preventDefault();
            // console.log(event.target.className);
            
            if(!event.target.classList.contains('next') && !event.target.classList.contains('previous') ){
                 let siblings = event.target.parentElement.children[0];
                console.log(siblings);
            }
           
            
        })
    })
}
export default Pagination;