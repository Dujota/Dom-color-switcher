/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
// UI variables
const switcher = document.querySelector('.switcher');

// Event Handler
function handleColorSwitch(e) {
  const color = e.target.classList[0];
  if(document.body.style.backgroundColor !== color){
    document.body.style.backgroundColor = color;
  }
}

// Event Listeners
switcher.addEventListener('click', handleColorSwitch);