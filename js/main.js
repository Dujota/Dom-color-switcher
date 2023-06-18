// Write your DOM code here!

// Element Selectors
/**
 * select an element by id - getElementById / querySelector
 * select an element by class - querySelector
 * select an element by tag name - querySelector
 * select multiple elements by class or tag  - querySelectorAll
 */

const colorSelector = document.querySelectorAll(`a`)
const mainPage = document.querySelector(`body`)
const sliderInput = document.querySelector(`input`)

let currentPrimaryBackgroundColor = 'white'

// Higer Order Functions

const convertToDecimal = () => {
  let inputNumber = sliderInput.value
  let decimal = inputNumber / 100
  return decimal
}

const updateCss = (primaryBackgroundColor = '') => {
  if (!primaryBackgroundColor) {
    primaryBackgroundColor = currentPrimaryBackgroundColor
  }

  let transparency = convertToDecimal()

  const colorToBackgroundAndTextColor = {
    red: {
      backgroundColor: `rgba(250,0,0,${transparency})`,
      textColor: 'white'
    },
    white: {
      backgroundColor: `rgba(0,0,0,${transparency})`,
      textColor: 'black'
    },
    blue: {
      backgroundColor: `rgba(0,0,250,${transparency})`,
      textColor: 'white'
    },
    yellow: {
      backgroundColor: `rgba(250,250,0,${transparency})`,
      textColor: 'black'
    }
  }

  const { backgroundColor, textColor } = colorToBackgroundAndTextColor[
    primaryBackgroundColor
  ]

  mainPage.style.background = backgroundColor
  mainPage.style.color = textColor

  currentPrimaryBackgroundColor = primaryBackgroundColor
}

const onColorChangeEvent = event => {
  const isRangeElement = event.target.type === 'range'

  if (isRangeElement) {
    updateCss()
  } else {
    updateCss(event.target.attributes.class.textContent)
  }
}

// Event Listeners
colorSelector.forEach(link =>
  link.addEventListener(`click`, onColorChangeEvent)
)
sliderInput.addEventListener(`change`, onColorChangeEvent)
