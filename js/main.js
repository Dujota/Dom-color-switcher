/* *****************  ELEMENT SELECTORS **************** */
/**
 * select an element by id - getElementById / querySelector
 * select an element by class - querySelector
 * select an element by tag name - querySelector
 * select multiple elements by class or tag  - querySelectorAll
 */

const colorSelectors = document.querySelectorAll(`a`)
const mainPage = document.querySelector(`body`)
const sliderInput = document.querySelector(`input`)
const pageTextSelectors = document.querySelectorAll(`h1, p`)

/* ************** END ELEMENT SELECTORS **************** */

let currentPrimaryBackgroundColor = 'white'

/* ********************* FUNCTIONS ******************** */

const getValueFromSlider = () => {
  let inputNumber = sliderInput.value
  let decimal = inputNumber / 100
  return decimal
}

const getRandomRGBCode = () => {
    const colorCode = Math.floor(Math.random() * 256);
    return colorCode;
}

const getRandomFlowerImage = () => {
  let images = [
    'https://orchidya.com/wp-content/uploads/2022/02/Orchidya-London-Flower-Shop-London-Delivery-Strawberry-Cream-2.jpeg',
    'https://images.pexels.com/photos/113535/pexels-photo-113535.jpeg?w=1200&h=627&auto=compress&cs=tinysrgb',
    'http://st2.depositphotos.com/4185411/8128/i/450/depositphotos_81286028-Flower-background-A-background-from-cultivated-flowers.jpg',
    'https://images.pexels.com/photos/775979/pexels-photo-775979.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    'http://cdn2.peopleimages.com/picture/201611/1440187-a-red-lily-flower-fit_400_400.jpg',
    'https://cdn0.peopleimages.com/picture/2016/1359397-beautiful-budding-flowers-fit_400_400.jpg',
    'http://cdn1.peopleimages.com/picture/2016/472964-a-photo-of-beautiful-pink-garden-flowers-fit_400_400.jpg',
    'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    'http://cdn1.peopleimages.com/picture/1360539-osteospermum-flowers-pink-daysi-fit_400_400.jpg',
    'http://images.assetsdelivery.com/compings_v2/peopleimages12/peopleimages122211/peopleimages12221121880.jpg'
];
return images[Math.floor(Math.random() * images.length)];
}

const updateCss = (primaryBackgroundColor) => {
  if (!primaryBackgroundColor) {
    primaryBackgroundColor = currentPrimaryBackgroundColor
  }

  let backgroundTransparency = getValueFromSlider()
  let overrideTextColor = null;

  if ((primaryBackgroundColor === `white` || primaryBackgroundColor === `blue` || primaryBackgroundColor === `red`) && (backgroundTransparency < 0.4)) {
    overrideTextColor = `black`
  }
  else if ((primaryBackgroundColor === `white` || primaryBackgroundColor === `random`) && (backgroundTransparency > 0.8)) {
    overrideTextColor =  `white`
  }

  const colorToBackgroundAndTextColor = {
    red: {
      backgroundColor: `rgba(250,0,0,${backgroundTransparency})`,
      textColor: overrideTextColor || `white`
    },
    white: {
      backgroundColor: `rgba(0,0,0,${backgroundTransparency})`,
      textColor: overrideTextColor || `black`
    },
    blue: {
      backgroundColor: `rgba(0,0,250,${backgroundTransparency})`,
      textColor: overrideTextColor || `white`
    },
    yellow: {
      backgroundColor: `rgba(250,250,0,${backgroundTransparency})`,
      textColor: 'black'
    },
    random: {
      backgroundColor: `rgba(${getRandomRGBCode()},${getRandomRGBCode()},${getRandomRGBCode()},${backgroundTransparency})`,
      textColor: overrideTextColor || 'black'
    },
    flower: {
      backgroundImage: `url(${getRandomFlowerImage()})`,
      backgroundSize: `cover`,
      textColor: `black`
      
    }
  }

  const { backgroundColor, textColor, backgroundImage, backgroundSize } = colorToBackgroundAndTextColor[
    primaryBackgroundColor
  ]

  mainPage.style.backgroundImage = backgroundImage;
  mainPage.style.backgroundSize = backgroundSize;
  mainPage.style.background = backgroundColor;
  mainPage.style.color = textColor;

  if(primaryBackgroundColor === `flower`){
    pageTextSelectors.forEach(element => {
      element.style.borderRadius = `25px`
      element.style.padding = `10px`
      element.style.background = `white`
    })
  } else{
    pageTextSelectors.forEach(element => {
      element.style.borderRadius = null
      element.style.padding = null
      element.style.background = null
    })
  }

   
  // headerSelectors.forEach(header =>
  //   linkstyle.padding = `10px`
  // paragraphSelectors.style.borderRadius = `25px`
  // paragraphSelectors.style.padding = `10px`

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

/* ***************** END FUNCTIONS ******************* */

/* ***************** EVENT LISTENERS ***************** */

colorSelectors.forEach(link =>
  link.addEventListener(`click`, onColorChangeEvent)
)
sliderInput.addEventListener(`input`, onColorChangeEvent)

/* ************** END EVENT LISTENERS **************** */

updateCss()