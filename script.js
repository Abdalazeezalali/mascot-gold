// navbar 
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

let myButton=document.getElementById("myBtn")
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = "block";
  } else {
      myButton.style.display = "none";
  }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
  window.onscroll=function(){
    scrollFunction()
  }

// create popup with the image
let ourGallery = document.querySelectorAll(".gallery img")
ourGallery.forEach(img => {
  img.addEventListener('click', (e) => {
    // create overlay element
    let overlay = document.createElement("div")
    // add class to overlay 
    overlay.className = 'popup-overlay'
    // append overlay to the body
    document.body.appendChild(overlay)
    // create the popup 
    let popupBox = document.createElement("div")
    // add class to the popup box
    popupBox.className = "popup-box"
    if (img.alt !== null) {
      // Create heading
      let imgHeading = document.createElement("h3")
      // create text for heading
      let imgText = document.createTextNode(img.alt)
      // append the text to the heading
      imgHeading.appendChild(imgText)
      // append the heading to the popup box 
      popupBox.appendChild(imgHeading)
    }
    // create the img 
    let popupImage = document.createElement("img")
    // set image source
    popupImage.src = img.src;
    // add image to popup box
    popupBox.appendChild(popupImage)
    // append the popup box to the body
    document.body.appendChild(popupBox)
    // create the close span 
    let closeButton = document.createElement("span")
    // create the close button text 
    let closeButtonText = document.createTextNode("X")
    // append text to the close button
    closeButton.appendChild(closeButtonText)
    // add class to close button 
    closeButton.className = "close-button"
    // add close button to the popup box 
    popupBox.appendChild(closeButton)
  })
});
// close popup
document.addEventListener('click', function (e) {
  if (e.target.className == 'close-button') {
    // remove the current popup
    e.target.parentNode.remove()
    // remove overlay 
    document.querySelector(".popup-overlay").remove()
  }
})
// for test
