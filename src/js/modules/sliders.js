const sliders = (slides, prev, dir, next) =>  {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if(n > items.length) {
      slideIndex = 1;
    }

    if(n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
    });

    nextBtn.addEventListener('click', () => {

    });
  } catch(e){}
};

export default sliders;