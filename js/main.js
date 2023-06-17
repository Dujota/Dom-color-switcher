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

// Higher Order Functions
const updateCss = (background, textColor) => {
  mainPage.style.background = background
  mainPage.style.color = textColor
}

const changeColor = link => {
  let linkColor = link.target.attributes.class.textContent
  if (linkColor == `red`) {
    updateCss(`red`, `white`)
  } else if (linkColor === `white`) {
    updateCss(`white`, `black`)
  } else if (linkColor === `blue`) {
    updateCss(`blue`, `white`)
  } else {
    updateCss(`yellow`, `black`)
  }
}

// Event Listeners
colorSelector.forEach(link => link.addEventListener(`click`, changeColor))
