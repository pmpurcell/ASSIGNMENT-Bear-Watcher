import '../styles/main.scss';
import bearFormBuilder from './bearForm';
import bears from './data';
import bearCardBuilder from './river';

const init = () => {
  bearFormBuilder();
  bearCardBuilder(bears);
};

init();
