  let slider = tns({
    container: '.slider-container',
    controls : false,
    nav: false,
    autoplay: false,
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

