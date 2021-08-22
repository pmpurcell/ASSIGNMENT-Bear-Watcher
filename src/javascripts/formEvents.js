import bears from './data';
import bearCardBuilder from './river';

const addBear = (event) => {
  event.preventDefault();
  const newBear = {
    name: document.querySelector('#bearName').value,
    image: document.querySelector('#bearImage').value,
  };

  bears.push(newBear);

  bearCardBuilder(bears);
};

const formSubmit = () => {
  document.querySelector('#bearFormContainer').addEventListener('submit', addBear);
};

export default formSubmit;
