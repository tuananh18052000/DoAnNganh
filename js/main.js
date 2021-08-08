

let scrollBar = document.querySelector('.scroll-bar');

function scrollIndicator(){
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) *100;
    scrollBar.style.width = percentage + '%';
}

window.onscroll = () =>{
    scrollIndicator();
}

var swiper = new Swiper(".banner-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  /* Image Comparison Slider*/
  const slider = document.querySelector('.slider input');
  const img = document.querySelector('.images .img-2');
  const dragLine = document.querySelector('.slider .drag-line');

  slider.oninput = () =>{
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + '%';
    img.style.width = sliderVal + '%';
  }
  
  