document.getElementsByClassName("ModelImgLink").onclick = function() {ChangeModel(NewModel)};

function ChangeModel(NewModel) {
  document.getElementsByClassName("ModelViewer").src = NewModel;
}

document.getElementById("MImgLink").onclick = function() {ChangeModel(NewModel)};

function ChangeModel(NewModel) {
  document.getElementById("MViewer").src = NewModel;
}
