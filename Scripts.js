document.getElementById("TestResult").innerHTML = "Javascript first test";
document.getElementById("TeskClick").onclick = function() {ClickTest()};
function ClickTest() {
  document.getElementById("TestResult").innerHTML = "Javascript test";
}
