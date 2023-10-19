class HorizontalBarOnScroll {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
             // Get the bar__horizontal element
const barHorizontal = document.querySelector('.bar__horizontal');

// Define the scroll position at which to trigger the class change
const scrollPosition = 50; // Change this to your desired value

// Define the class names to add and remove
const classNameToAdd = 'bar__horizontal-scrolled';
const classNameToRemove = 'bar__horizontal-initial';

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScrollPosition = window.pageYOffset;

  // Get the current screen size
  const screenWidth = window.innerWidth;

  // Check if the screen size is less than or equal to 770px
  if (screenWidth <= 770) {
    // If the current scroll position is greater than or equal to the trigger position,
    // add the scrolled class and remove the initial-state class
    if (currentScrollPosition >= scrollPosition) {
      barHorizontal.classList.add(classNameToAdd);
      barHorizontal.classList.remove(classNameToRemove);
    } else {
      // Otherwise, remove the scrolled class and add the initial-state class
      barHorizontal.classList.remove(classNameToAdd);
      barHorizontal.classList.add(classNameToRemove);
    }
  } else {
    // If the screen size is greater than 768px, always add the initial-state class
    barHorizontal.classList.add(classNameToRemove);
  }
});
        });


    }
}

export default HorizontalBarOnScroll;