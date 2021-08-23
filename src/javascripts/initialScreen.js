import renderToDom from './renderToDom';

const initialScreen = () => {
  const domString = `
    <div id="app">
    <h1 class="header"> Bear Watcher </h1>
    <div id="bearFormContainer"></div>
    <div id="river"></div>
    </div>
    `;

  renderToDom('body', domString);
};

export default initialScreen;
