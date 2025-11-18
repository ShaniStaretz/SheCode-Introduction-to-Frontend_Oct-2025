/**
 * Triggers when the user clicks submit button. Opens a pop-up message.
In a later version, the user will be asked to fill their name in an input box,
and the pop-up message will show the user’s name.
 */
function onClickOrder() {
  alert("Your order is on the way!");
}

function onClickRadio() {
  const element = document.getElementById("flavor-check");
  const isChecked = element.checked;
  element.checked = !isChecked;
}
