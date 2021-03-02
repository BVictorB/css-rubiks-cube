const
  cube = document.querySelector('.cube'),
  faces = document.querySelectorAll('main button'),
  rotateButtons = document.querySelectorAll('footer button'),
  root = document.documentElement

let 
  rotateY = 45,
  rotateX = -30

const rotateFunction = (e, arrow) => {
  const rotation = e ? e.target.getAttribute('data-rotate') : arrow

    if (rotation === 'right') {
      rotateY += 45
    } else if (rotation === 'left') {
      rotateY -= 45
    } else if (rotation === 'up') {
      rotateX = -30
    } else if (rotation === 'down') {
      rotateX = 30
    } else {
      console.log('Error!')
    }

    root.style.setProperty('--rotateCubeX', `${rotateX}deg`)
    root.style.setProperty('--rotateCubeY', `${rotateY}deg`)
}

document.addEventListener('keydown', (e) => {
  if (e.keyCode == '38') {
    rotateFunction(null, 'up')
  } else if (e.keyCode == '40') {
    rotateFunction(null, 'down')
  } else if (e.keyCode == '37') {
    rotateFunction(null, 'left')
  } else if (e.keyCode == '39') {
    rotateFunction(null, 'right')
  }
})

rotateButtons.forEach(rotateButton => {
  rotateButton.addEventListener('click', rotateFunction)
})
