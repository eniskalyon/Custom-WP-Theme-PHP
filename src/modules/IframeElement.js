// Get a reference to the iframe element
var iframe = document.querySelector("iframe");

// Define a function to update the height attribute
function updateIframeHeight() {
  if (window.innerWidth <= 768) {
    iframe.setAttribute("height", "7%");
  } else {
    iframe.setAttribute("height", "40%");
  }
}

// Call the function on page load to set the initial height
updateIframeHeight();

// Add an event listener to the window object that listens for the "resize" event
window.addEventListener("resize", function() {
  updateIframeHeight();
});

export default IframeElement;
