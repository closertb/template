import { browserHistory } from 'dva/router';
import createApp from './app';

const app = createApp({
  history: browserHistory,
  initialState: {},
});
app.start('#app');

console.log('start');
