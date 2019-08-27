/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'dva';
import style from './index.less';
@connect(({ index }) => ({ ...index }), dispatch => ({
  _add() {
    dispatch({ type: 'index/add' });
  },
  _subtract() {
    dispatch({ type: 'index/subtract' });
  },
  login(payload) {
    dispatch({ type: 'index/login', payload: { name: 'dom', pwd: 'dom456' } });
  }
}))

export default class Index extends React.PureComponent {
  add = () => {
    const { _add } = this.props;
    _add();
  };

  subtract = () => {
    const { _subtract } = this.props;
    _subtract();
  };

  render() {
    const { error, loading, count, login, user } = this.props;
    if (error) {
      return <div>{error.msg}</div>;
    }
    return (
      <div className={style.Action}>
        <div className="block">
          <h3>操作测试</h3>
          <div>
            <div>
              <button onClick={this.add}>加1</button>
              <button onClick={this.subtract}>减1</button>
            </div>
            <div>
              <span>计数:{count}</span>
            </div>
          </div>
        </div>
        <div className="block">
          <h3>请求测试</h3>
          <div>
            <div>
              <button onClick={login}>login</button>
            </div>
            <div>
              {loading.login ? <span>请求中</span> : <span>{user.name ? user.name : '未登录'}</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
