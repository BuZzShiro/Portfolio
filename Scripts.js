//---------------------------------------------Change Model-----------------------------------------------------\\
document.getElementById("MImgLink").onclick = function(NewModel) {ChangeModel()};

function ChangeModel(NewModel) {
  document.getElementById("MViewer").src = NewModel;
}

//---------------------------------------------Render Array-----------------------------------------------------\\
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/img/Splash_image1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/img/Splash_image2.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'images/img/Splash_image3.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'images/img/Splash_image4.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'images/img/Splash_image5.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg'

//--------------------------------------------Show Render Images------------------------------------------------\\
// Get the gallery box
var imageBox1 = document.getElementById("imageBox1");

// Get the modal image tag
var modal = document.getElementById("myModal");

var modalImage = document.getElementById("modal-image");

function OpenLargeImg(Img) {
  modal.style.display = "block";
  modalImage.src = "/Images/Renders/" + Img;
}
// When the user clicks the big picture, set the image and open the modal
//imageBox1.onclick = function (e) {
//  var src = e.srcElement.src;
//  modal.style.display = "block";
//  modalImage.src = src;
//};
