import '../styles/main.scss';
import bearFormBuilder from './bearForm';
import formSubmit from './formEvents';
import initialScreen from './initialScreen';

const init = () => {
  initialScreen();
  bearFormBuilder();
  formSubmit();
};

init();
