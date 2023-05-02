document.getElementById("TeskClick").onclick = function(NewModel) {ChangeModel()};

function ChangeModel(NewModel) {
  document.getElementById("MViewer").src = NewModel;
}
