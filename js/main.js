function buttons() {
  alert("Thanks for click");
}

function clickar(element) {
  ola = document.getElementById("acknowledgment").innerHTML = "<b>Thank to Click</b>"
}

function redirect(element) {
  window.open("https://www.youtube.com/watch?v=a2Ql5N9Oaro&ab_channel=JesusCulture")
  window.location.href("https://www.youtube.com/watch?v=a2Ql5N9Oaro&ab_channel=JesusCulture")
}

function trocar(element) {
  element.innerHTML = "Thank to Mouse Over"
}

function back(element) {
  element.innerHTML = "Put Mouse Here"
}

function functionChange(element) {
  console.log(element.value)
}