import '../styles/main.scss';
import bearFormBuilder from './bearForm';
import formSubmit from './formEvents';

const init = () => {
  bearFormBuilder();
  formSubmit();
};

init();
