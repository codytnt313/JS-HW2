/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image

    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  // Step 1: Check if the event is triggering
  console.log("upDate() function triggered");

  // Step 2: Log details about the previewPic
  console.log("Image source:", previewPic.src);
  console.log("Alt text:", previewPic.alt);

  // Step 3: Change the text of the element with id="image"
  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;

  // Step 4: Change the background image
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  console.log("Background updated to:", previewPic.src);
  
  }

  function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    // Step 1: Restore the image background to the original
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    // Step 2: Restore the text to the original
    imageDiv.innerHTML = "Hover over an image below to display here.";

    // Confirm reset
    console.log("Background and text reset to original");

  }

function addTabFocus() {
  console.log("Page loaded and addTabFocus triggered");
  const images = document.querySelectorAll(".preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}