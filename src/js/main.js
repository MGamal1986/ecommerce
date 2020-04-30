
// add scroll event for body
// catch navigation element
const navigation = document.querySelector('.navigation');
window.addEventListener('scroll',(e)=>{
    if(document.documentElement.scrollTop > 350){
        navigation.classList.add('shad');
    }else{
        navigation.classList.remove('shad');

    }
})

// on focus increase width of search input
// catch input 
const searchInput = document.querySelector('.nav-header input');
const searchClass = searchInput.parentElement;
// add focus event
searchInput.addEventListener('focus',(e)=>{
    searchClass.style.width = "450px";
});
// add blur event
searchInput.addEventListener('blur',(e)=>{
    searchClass.style.width = "240px";
});

// add click event to burger icon in navbar
// catch burger icon
const expandBtn = document.querySelector('.navbar-list .expand-icon');
// catch close button
const closeBtn = document.querySelector('.navbar-list .expand-icon.back');
// catch expan menu
const expanMenu = document.querySelector('.navbar-list .expand-menu')

// add click event to show expand menu
expandBtn.addEventListener('click',(event)=>{
    expanMenu.classList.toggle('show');
    expandBtn.classList.toggle('back');
    // expandBtn.classList.remove('boxy');
});
// add click event to close expand menu
// closeBtn.addEventListener('click',(event)=>{
//     expanMenu.classList.remove('show');
//     closeBtn.classList.remove('back');
//     expandBtn.classList.add('boxy');
// })


// close expand menu
document.body.addEventListener('click',(event)=>{
    if(!event.target.closest('.navigation') && expanMenu.classList.contains('show') ){
        expanMenu.classList.remove('show');
        expandBtn.classList.toggle('back');
    }
});

// expand submenu 
// catch submenu
const subMenu = document.querySelector('.navbar-list .expand-menu .menu');
// catch pages list item
const listPages = document.querySelector('.navbar-list .expand-menu .pages');

listPages.addEventListener('click', e =>{
    subMenu.classList.toggle('expand');
});





