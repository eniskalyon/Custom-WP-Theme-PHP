import HorizontalBarOnScroll from './modules/HorizontalBarOnScroll';
const horizontalBarOnScroll = new HorizontalBarOnScroll();

window.addEventListener('load', function() {
    var sections = document.querySelectorAll('.reveal-section');
    var windowHeight = window.innerHeight;
    var previousSection = null;
  
    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var position = section.getBoundingClientRect().top + scrollTop;
  
        if (position < scrollTop + windowHeight - 100 || section.classList.contains('section-0')) {
          section.classList.add('reveal');
  
          if (previousSection && previousSection !== section) {
            previousSection.classList.remove('reveal');
          }
  
          previousSection = section;
        }
      }
    });
  });
  