import bears from './data';
import bearCardBuilder from './river';

const addBear = (event) => {
  event.preventDefault();
  const newBear = {
    name: document.querySelector('#bearName').value,
    image: document.querySelector('#bearImage').value,
    fishCaught: 0,
    fishAttempted: 0,
  };

  bears.push(newBear);

  bearCardBuilder(bears);
};

const catchFish = (event) => {
  const targetId = event.target.id;
  if (event.target.type === 'button') {
    event.preventDefault();
    bears[targetId].fishCaught += 1;
    bearCardBuilder(bears);
  }
};

const formSubmit = () => {
  document.querySelector('#bearFormContainer').addEventListener('submit', addBear);
  document.querySelector('#river').addEventListener('click', catchFish);
};

export default formSubmit;
