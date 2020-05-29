  function Slider(){
    let slider = tns({
      container: '.slider-container',
      controls : false,
      nav: false,
      autoplay: true,
      rewind: true,
      mouseDrag : true,
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
  }
  export default Slider;


