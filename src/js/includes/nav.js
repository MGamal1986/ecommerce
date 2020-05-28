import {addEvent} from './Functions.js';
function Nav(){
    // on focus increase width of search input
    // catch input 
    const searchInput = document.querySelector('.nav-header input');
    const searchClass = searchInput.parentElement;
    let windowSize;
    // calculate window size every time page loaded
    addEvent(window,'load',(event)=>{
        windowSize = window.screen.width;
    });
    // add focus event when window size larger that 768px 
    addEvent(searchInput,'focus',(event)=>{
        if(windowSize > 768){
            searchClass.style.minWidth = "440px";
        }
    });
    // add blur event
    addEvent(searchInput,'blur',(event)=>{
        if(windowSize > 768){
            searchClass.style.minWidth = "240px";
        }
    });
    
    
    
    
    // add click event to burger icon in navbar
    // catch burger icon
    const expandBtn = document.querySelector('.navbar-list .expand-icon');
    // catch expan menu
    const expanMenu = document.querySelector('.navbar-list .expand-menu')
    // catch fontawsome icon in expand button
    const iconBtn = document.querySelector('.navbar-list .expand-icon i');
    
    // add click event to show expand menu
    addEvent(expandBtn,'click',(event)=>{
        expanMenu.classList.toggle('show');
        iconBtn.classList.toggle('fa-bars');
        iconBtn.classList.toggle('fa-times');
    });
    
    // close expand menu when click on any point in page except navigation section
    addEvent(document.body,'click',(event)=>{
        if(!event.target.closest('.navigation') && expanMenu.classList.contains('show') ){
            expanMenu.classList.remove('show');
            iconBtn.classList.toggle('fa-bars');
            iconBtn.classList.toggle('fa-times');
        }
    });
    



    // expand submenu 
    // catch submenu
    const subMenu = document.querySelector('.navbar-list .expand-menu .menu');
    // catch pages list item
    const listPages = document.querySelector('.navbar-list .expand-menu .pages');
    
    // expand submenu when click on page items
    addEvent(listPages,'click',(event)=>{
        event.preventDefault();
        subMenu.classList.toggle('expand');
        event.target.classList.toggle('open');
    });
    
    // catch collection list item
    const listCollect = document.querySelector('.navbar-list .expand-menu .collections');
    // catch collections submenu
    const collectionSubMenu = document.querySelector('.navbar-list .expand-menu .menu-collections');
    
    // expand submenu when click on collection item
    addEvent(listCollect,'click',(event)=>{
        event.preventDefault();
        collectionSubMenu.classList.toggle('expand');
        event.target.classList.toggle('open');
        expanMenu.classList.toggle('scroll-y');
    });
    


    // add click event on search icon to open search overlay
    // catch search icon element
    const searchIcon = document.querySelector('nav .user .seacrh-icon');
    
    // catch search overlay layer
    const searchOverlay = document.querySelector('nav .user .search-overlay')
    // add click event
    searchIcon.onclick = (event)=>{
        searchOverlay.classList.add('face');
    }
    addEvent(searchIcon,'click',(event)=>{
        searchOverlay.classList.add('face');
    });
    
    // remove search overlay layer
    // catch close button 
    const closeBtn = document.querySelector('nav .user .search-overlay .close-x');
    // add click event
    addEvent(closeBtn,'click',(event)=>{
        searchOverlay.classList.remove('face')
    });
}
export default Nav;







