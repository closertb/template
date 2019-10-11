import { create } from 'dva-core';
import hook from '@doddle/dva';
import * as models from './model';


export default function createApp(opts) {
  const app = create(opts);
  app._history = opts.history;
  hook({ app });
  Object.keys(models).forEach(key => app.model(models[key]));
  return app;
}
