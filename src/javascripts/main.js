import '../styles/main.scss';
import bearFormBuilder from './bearForm';

const init = () => {
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.log('YOU ARE UP AND RUNNING!');
  bearFormBuilder();
};

init();
