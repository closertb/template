import { create } from 'dva-core';
import hook from '@doddle/dva';
import * as models from './model';


export default function createApp(opts) {
  const app = create(Object.assign({
    onError(e) { // 全局dispatch错误处理
      console.log(e);
    }
  }, opts));
  app._history = opts.history;
  hook({ app });
  Object.keys(models).forEach(key => app.model(models[key]));
  return app;
}
