/**
 * Triggers when the user clicks submit button. Opens a pop-up message.
In a later version, the user will be asked to fill their title in an input box,
and the pop-up message will show the user’s title.
 */
let numberOut = 7;
const titleElement = document.getElementById("store-title");
const classValue = titleElement.getAttribute("class");
alert(classValue);
function onClickOrder() {
  // console.log("Order button clicked");
  const titleElement = document.getElementById("store-title");
  // let message = titleElement.value + ", your order has been received!";
  // const num;
  // const num = "sjani";
  // numberOut = 10;
  // let message = `the number is: ${num}`;
  // console.log("the number is:" + numberOut);
  // alert(numberOut);
  titleElement.className = "blue-background";
  titleElement.classList.remove("blue-background");
  titleElement.classList.add("blue-text");  
}

function onClickRadio() {
  const element = document.getElementById("flavor-check");
  const isChecked = element.checked;
  element.checked = !isChecked;
}
console.log("the number outside is:" + numberOut);
