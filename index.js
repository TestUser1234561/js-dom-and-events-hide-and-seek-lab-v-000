function getFirstSelector(s) {
  return document.getElementById('app').querySelectorAll(s)[0]
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  let target = document.getElementById('grand-node')
  console.log(target)
}
