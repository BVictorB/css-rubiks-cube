const
  cube = document.querySelector('.cube'),
  faces = document.querySelectorAll('main button'),
  rotateButtons = document.querySelectorAll('footer button'),
  root = document.documentElement,
  checkboxStriped = document.querySelector('#striped'),
  checkboxTransparent = document.querySelector('#transparent'),
  checkboxAnimate = document.querySelector('#animate')

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

// faces.forEach(face => {
//   face.addEventListener('click', e => {
//     const 
//       element = e.target.parentElement,
//       column = Number(element.classList[0].match(/(?<=\-).*/)[0]),
//       row = Number(element.classList[1].match(/(?<=\-).*/)[0]),
//       block = Number(element.classList[2].match(/(?<=\-).*/)[0])

//       // console.log(`Column: ${column}, Row: ${row}, Block: ${block}`)
//       // e.target.parentElement.classList = `column-${column === 1 ? 2 : 3} row-${row} block-${block}`
//   })
// })

checkboxStriped.addEventListener('change', (e) => {
  if (e.target.checked) {
    root.style.setProperty('--greenGradient', `repeating-linear-gradient(
      45deg,
      #00c85d,
      #00c85d 15px,
      #009B48 15px,
      #009B48 30px
    )`)
    root.style.setProperty('--redGradient', `repeating-linear-gradient(
      45deg,
      #e80000,
      #e80000 15px,
      #B90000 15px,
      #B90000 30px
    )`)
    root.style.setProperty('--blueGradient', `repeating-linear-gradient(
      45deg,
      #005fed,
      #005fed 15px,
      #0045ad 15px,
      #0045ad 30px
    )`)
    root.style.setProperty('--orangeGradient', `repeating-linear-gradient(
      45deg,
      #fb7831,
      #fb7831 15px,
      #ff5900 15px,
      #ff5900 30px
    )`)
    root.style.setProperty('--whiteGradient', `repeating-linear-gradient(
      45deg,
      #fff,
      #fff 15px,
      #dedede 15px,
      #dedede 30px
    )`)
    root.style.setProperty('--yellowGradient', `repeating-linear-gradient(
      45deg,
      #ffe149,
      #ffe149 15px,
      #ffd500 15px,
      #ffd500 30px
    )`)
  } else {
    root.style.removeProperty('--greenGradient')
    root.style.removeProperty('--redGradient')
    root.style.removeProperty('--blueGradient')
    root.style.removeProperty('--orangeGradient')
    root.style.removeProperty('--whiteGradient')
    root.style.removeProperty('--yellowGradient')
  }
})

checkboxTransparent.addEventListener('change', (e) => {
  if (e.target.checked) {
    root.style.setProperty('--transparantFaces', '.7')
  } else {
    root.style.removeProperty('--transparantFaces')
  }
})

checkboxAnimate.addEventListener('change', (e) => {
  if (e.target.checked) {
    root.style.setProperty('--cubeAnimation', 'rotate 8s linear infinite alternate')
  } else {
    root.style.removeProperty('--cubeAnimation')
  }
})