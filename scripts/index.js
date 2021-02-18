const
  body = document.body,
  cube = document.querySelector('main'),
  buttons = document.querySelectorAll('button')

body.addEventListener('mousedown', e => {
  body.onmousemove = e => {
    mouseMoveFunction(e)
  }
})

body.addEventListener('mouseup', e => {
  body.onmousemove = null
})

const mouseMoveFunction = e => {
  if (e.target.tagName.toLowerCase() === 'body') {
    cube.style.transform = `rotateX(${e.layerY}deg) rotateY(${e.layerX}deg)`
  }
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    console.log(e.target)
  })
})