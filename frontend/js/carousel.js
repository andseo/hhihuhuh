document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.product-poster-content');
    const totalSlides = slides.length;
  
    function showSlides(n) {
      if (n >= totalSlides) { slideIndex = 0; }
      if (n < 0) { slideIndex = totalSlides - 1; }
      
      // First, hide all slides
      slides.forEach(slide => {
        slide.style.display = 'none';  
      });
  
      // Then, display the current slide
      slides[slideIndex].style.display = 'flex';
    }
  
    // Initial call
    showSlides(slideIndex);
  
    // Next and previous controls
    const next = () => {
      showSlides(++slideIndex);
    };
  
    const prev = () => {
      showSlides(--slideIndex);
    };
  
    // Attach listeners to next/prev buttons
    document.querySelector('.carousel-control.right').addEventListener('click', next);
    document.querySelector('.carousel-control.left').addEventListener('click', prev);
  
    // Automatic slide show
    setInterval(next, 3000); // Change slide every 3 seconds
  
    // Pause on hover (optional)
    document.querySelector('.product-poster').addEventListener('mouseenter', () => {
      clearInterval(interval);
    });
    document.querySelector('.product-poster').addEventListener('mouseleave', () => {
      interval = setInterval(next, 3000);
    });
  });
  