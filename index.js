function getFirstSelector(s) {
  return document.getElementById('app').querySelectorAll(s)[0]
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  return document.getElementById('grand-node').lastChild

}
