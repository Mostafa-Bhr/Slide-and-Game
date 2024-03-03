let slider = document.querySelector('.slider');
  let slides = document.querySelectorAll('.slide');
  let index = 0;
  const slideWidth = slides[0].clientWidth;

  function nextSlide() {
    index++;
    if (index === slides.length) {
      index = 0;
    }
    updateSlide();
  }

  function updateSlide() {
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  setInterval(nextSlide, 3000);