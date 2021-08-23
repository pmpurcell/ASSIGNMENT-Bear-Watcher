import renderToDom from './renderToDom';

const bearCardBuilder = (array) => {
  let domString = ' ';

  array.forEach((element, i) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt=${element.name}>
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p>Fish Caught: ${element.fishCaught} </p>
            <button type='button' id="${i}">Caught Fish</button>
          </div>
      </div>
        `;
  });

  renderToDom('#river', domString);
};

export default bearCardBuilder;
