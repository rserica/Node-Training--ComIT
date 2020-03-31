// Define a images array and add all the images names (only if wb is part of //the name) and extension
// Create a img element for each image in the images array
// Set the image src attribute with the image name (example: batmanwb.png)
// We'll show the black and white pictures When the document gets rendered
// Replace the black and white picture for the color one when the user rolls over the image element (like it's active)
// Replace the color image for the black and white one when the user rolls out of the image element (like it's inactive again)
// Show an alert with the superhero name in upper case when the user clicks on an image using
// Awppend all the created image elements to the body element

const body = document.querySelector("body");
const images = ["batman","flash","superman","wonder_woman"];

images.forEach(function(image,img,counter){
  img = document.createElement("img");
  body.appendChild(img);
  img.src = "img/"+image+".png";

  img.addEventListener("mouseover",function(){
  console.log("mouseover");
  img.src = "img/"+image+"wb.png";
  });
  img.addEventListener("mouseout",function(){
  console.log("mouseout");
  img.src = "img/"+image+".png";
  });
});
