const widthRatioInput = document.querySelector('#ratio-input-width')
const heightRatioInput = document.querySelector('#ratio-input-height')
const widthInput = document.querySelector('#width-input')
const heightInput = document.querySelector('#height-input')

function calculateWidth() {
  let aspectRatio = widthRatioInput.value / heightRatioInput.value
  let width = parseFloat((heightInput.value * aspectRatio).toFixed(2))
  widthInput.value = width
}

function calculateHeight() {
  let aspectRatio = widthRatioInput.value / heightRatioInput.value
  let height = parseFloat((widthInput.value / aspectRatio).toFixed(2))
  heightInput.value = height
}

widthRatioInput.addEventListener('change', calculateWidth)
heightRatioInput.addEventListener('change', calculateHeight)
widthInput.addEventListener('change', calculateHeight)
heightInput.addEventListener('change', calculateWidth)
