$(function(){
$('.carousel__inner').slick({
  arrows: false,
  dots:true,
  slidesToScroll: 1,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 841,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 414,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
});