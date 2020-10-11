function animate_string(id) {
  var element = document.getElementById(id);
  console.log(element);
  var textNode = element.childNodes[0]; // assuming no other children
  console.log(textNode);
  var text = textNode.data;
  element.style.color = 'yellow';
  console.log(text);
  // ll = text.substring(0, text.length - 1);
  // console.log(ll);
  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 150);
}
// +
