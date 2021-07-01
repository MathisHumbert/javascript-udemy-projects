const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Udemy tuto code

btn.addEventListener('click', function () {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.background = hexColor;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
// My own work before watching the video
// const getHex = () => {
//   const hexArray = ['#'];
//   for (let i = 0; i < 6; i++) {
//     let randomNumber = Math.floor(Math.random() * hex.length);
//     let value = hex[randomNumber];
//     hexArray.push(value);
//   }
//   let finalHex = hexArray.join('');
//   return finalHex;
// };

// btn.addEventListener('click', () => {
//   let value = getHex();
//   console.log('value', value);
//   document.body.style.background = value;
//   color.textContent = value;
// });
