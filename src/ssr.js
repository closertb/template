import { browserHistory } from 'dva/router';
import createApp from './app';

const app = createApp({
  history: browserHistory,
  initialState: window.state ? JSON.parse(window.state) : {},
}, true);
delete window.state;
app.start('#app');
