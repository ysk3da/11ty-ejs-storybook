import Home from '../../../dist/home.html';
import '../../styles/pages/_Home.scss';
import markdown from './Home.md';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    notes: { markdown } // markdown 読み込み
  },
};

export const home = () => {
  return Home;
};
