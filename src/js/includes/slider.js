  let slider = tns({
    container: '.slider-container',
    controls : false,
    nav: false,
    autoplay: true,
    mouseDrag : true,
    loop : true,
    speed : 300,
    gutter: 20,
    responsive: {
        993: {
          items: 4
        },
        767: {
          items: 2
        },
        575: {
          items: 1
        }
      }
  });

  // click event on wishlist and add-to-cart button
  // catch wishlist element
  const wishElements = document.querySelectorAll('.popular-products .slider-container .card .wishlist i');
  // add click event
  wishElements.forEach(btn=>{
    btn.onclick = e =>{
      e.target.parentElement.classList.toggle('selected');
    }
  })

  // catch add-to-cart element
  const addToCarts = document.querySelectorAll('.popular-products .slider-container .card .add-card i');
  // add click event
  addToCarts.forEach(btn=>{
    btn.onclick = e =>{
      e.target.parentElement.classList.toggle('selected');
    }
  })

