function getFirstSelector(s) {
  return document.getElementById('app').querySelectorAll(s)[0]
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list');
  list.forEach(function(e) {
    e.innerHTML = parseInt(e.innerHTML) + n
  })
}
