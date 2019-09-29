import { browserHistory } from 'dva/router';
import createApp from './app';

const app = createApp({
  history: browserHistory,
  initialState: window.states ? JSON.parse(window.states) : {},
});
delete window.states;
app.start('#app');
