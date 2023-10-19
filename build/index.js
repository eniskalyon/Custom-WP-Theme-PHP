/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/HorizontalBarOnScroll.js":
/*!**********************************************!*\
  !*** ./src/modules/HorizontalBarOnScroll.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (HorizontalBarOnScroll);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_HorizontalBarOnScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/HorizontalBarOnScroll */ "./src/modules/HorizontalBarOnScroll.js");

const horizontalBarOnScroll = new _modules_HorizontalBarOnScroll__WEBPACK_IMPORTED_MODULE_0__["default"]();
window.addEventListener('load', function () {
  var sections = document.querySelectorAll('.reveal-section');
  var windowHeight = window.innerHeight;
  var previousSection = null;
  window.addEventListener('scroll', function () {
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
}();
/******/ })()
;
//# sourceMappingURL=index.js.map