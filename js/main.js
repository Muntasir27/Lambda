$(document).ready(function(){
  // Parallax  effect
  $('#homepage').parallax({imageSrc: './img/section-background.png'});
  $('#ingredients').parallax({imageSrc: './img/ingredients-background.png'});
  $('#reviews').parallax({imageSrc: './img/reviews-background.png'});

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
