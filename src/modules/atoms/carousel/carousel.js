$(".pf-carousel__owl").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  dots: false,
  autoWidth: false,
  items: 4,
  mouseDrag: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
