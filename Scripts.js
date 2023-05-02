document.getElementById("MImgLink").onclick = function(NewModel) {ChangeModel()};

function ChangeModel(NewModel) {
  document.getElementById("MViewer").src = NewModel;
}
