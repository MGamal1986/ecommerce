  let slider = tns({
    container: '.slider-container',
    items: 3,
    controls : false,
    nav: false,
    autoplay: true,
    mouseDrag : true,
    loop : true,
    speed : 400,
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

