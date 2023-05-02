document.getElementById("TestResult").innerHTML = "Javascript first test";
document.getElementById("TeskClick").onclick = function(NewModel) {ClickTest()};
function ClickTest(NewModel) {
  document.getElementById("TestResult").innerHTML = NewModel;
}
