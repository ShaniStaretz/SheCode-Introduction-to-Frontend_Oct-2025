function onDisplayClick() {
  alert(document.getElementById("occupation").value);
}

function onAlertClick() {
  document.getElementById("greeting").value =
    "Hello " + document.getElementById("name").value;
}
