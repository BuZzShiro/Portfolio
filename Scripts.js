//---------------------------------------------Change Model-----------------------------------------------------\\
document.getElementById("MImgLink").onclick = function(NewModel) {ChangeModel()};

function ChangeModel(NewModel) {
  document.getElementById("MViewer").src = NewModel;
}

//---------------------------------------------Render Array-----------------------------------------------------\\
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'Images/Renders/ZeroBio.png';
imgArray[1] = new Image();
imgArray[1].src = 'Images/Renders/Museum.png';
imgArray[2] = new Image();
imgArray[2].src = 'Images/Renders/Room.png';
imgArray[3] = new Image();
imgArray[3].src = 'Images/Renders/Diamond.png';
imgArray[4] = new Image();
imgArray[4].src = 'Images/Renders/Planet.png';
imgArray[5] = new Image();
imgArray[5].src = 'Images/Renders/PotMirror.png';
imgArray[6] = new Image();
imgArray[6].src = 'Images/Renders/SecurityCam.png';
imgArray[7] = new Image();
imgArray[7].src = 'Images/Renders/FancyCieling.png';
imgArray[8] = new Image();
imgArray[8].src = 'Images/Renders/MedicalLab.png';
imgArray[9] = new Image();
imgArray[9].src = 'Images/Renders/NekoRoom.png';
imgArray[10] = new Image();
imgArray[10].src = 'Images/Renders/Robot.png';
imgArray[11] = new Image();
imgArray[11].src = 'Images/Renders/Safe.png';

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
