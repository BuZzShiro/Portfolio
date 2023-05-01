document.getElementsByClassName("ModelImgLink").onclick = function() {ChangeModel(NewModel)};

function ChangeModel(NewModel) {
  document.getElementsByClassName("ModelViewer").src = NewModel;
}