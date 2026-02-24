/**
 * Triggers when the user clicks submit button. Opens a pop-up message.
In a later version, the user will be asked to fill their name in an input box,
and the pop-up message will show the user’s name.
 */
function onBlueButtonClick() {
  console.log("blue button clicked");
  alert("You have clicked the Button!");
}

function onClickButton() {
  alert("hello " + document.getElementById("name-input").value); // Clicked!
  console.log("hello shani");
}

function onClickButton1() {
  alert("hello " + document.getElementById("name-input").value); // Clicked!
}
