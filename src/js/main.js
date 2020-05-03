
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
    searchClass.style.width = "440px";
});
// add blur event
searchInput.addEventListener('blur',(e)=>{
    searchClass.style.width = "240px";
});

// add click event to burger icon in navbar
// catch burger icon
const expandBtn = document.querySelector('.navbar-list .expand-icon');

// catch expan menu
const expanMenu = document.querySelector('.navbar-list .expand-menu')

// catch fontawsome icon in expand button

const iconBtn = document.querySelector('.navbar-list .expand-icon i');

// add click event to show expand menu
expandBtn.addEventListener('click',(event)=>{
    expanMenu.classList.toggle('show');
    // expandBtn.classList.toggle('back');
    iconBtn.classList.toggle('fa-bars');
    iconBtn.classList.toggle('fa-times');
});



// close expand menu
document.body.addEventListener('click',(event)=>{
    if(!event.target.closest('.navigation') && expanMenu.classList.contains('show') ){
        expanMenu.classList.remove('show');
        // expandBtn.classList.toggle('back');
        iconBtn.classList.toggle('fa-bars');
        iconBtn.classList.toggle('fa-times');
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

// catch collection list item
const listCollect = document.querySelector('.navbar-list .expand-menu .collections');
// catch collections submenu
const collectionSubMenu = document.querySelector('.navbar-list .expand-menu .menu-collections');

// add click event on collection list item

listCollect.addEventListener('click',(event)=>{
    collectionSubMenu.classList.toggle('expand');
    expanMenu.classList.toggle('scroll-y');
});


// open cart page
// catch cart element
const cartElement = document.querySelector('.nav-header .user .cart');
// catch overlay layer
const overlay = document.querySelector('nav .overlay');

// catch cart icon in overlay layer
const cartIcon = document.querySelector('nav .overlay .cart-icon');

// catch cart contianer in overlay layer
const cartContainer = document.querySelector('nav .overlay .cart-container');
cartElement.addEventListener('click',(event)=>{
    overlay.classList.add('overhead');
    setTimeout(()=>{
        cartContainer.classList.add('appear');
    },10)
    
});
cartIcon.addEventListener('click',(event)=>{
    
    cartContainer.classList.remove('appear');
    setTimeout(()=>{
        overlay.classList.remove('overhead');
    },400)
    
});

// add click event on overlay layer
overlay.addEventListener('click',(event)=>{
    if(!event.target.closest('.cart-container')){
        cartContainer.classList.remove('appear');
        setTimeout(()=>{
            overlay.classList.remove('overhead');
        },400)
    } 
})




