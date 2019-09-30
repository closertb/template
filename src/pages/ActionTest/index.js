/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'dva';
import { CSSTransition } from 'react-transition-group';
import style from './index.less';
import './index.css';

@connect(({ index }) => ({ ...index }), dispatch => ({
  _add() {
    dispatch({ type: 'index/add' });
  },
  _subtract() {
    dispatch({ type: 'index/subtract' });
  },
  login(payload) {
    dispatch({ type: 'index/login', payload: { name: 'dom', pwd: 'dom456' } });
  },
  loginSuccess(payload) {
    dispatch({ type: 'index/login', payload: { name: 'dom', pwd: '123456' } });
  },
  getList(payload) {
    dispatch({ type: 'index/getList', payload: { pn: 1, ps: 10 } });
  }
}))

export default class Index extends React.PureComponent {
  state = { show: false }

  add = () => {
    const { _add } = this.props;
    _add();
  };

  subtract = () => {
    const { _subtract } = this.props;
    _subtract();
  };

  handleShow = show => () => {
    this.setState({ show });
  }

  render() {
    const { error, loading = {}, total, count, login, loginSuccess, user = {}, getList } = this.props;
    const { show } = this.state;
    if (error) {
      return <div>{error.msg}</div>;
    }
    return (
      <div className={style.Action}>
        <div className="block">
          <h3>登录测试</h3>
          <div>
            <div>
              <button onClick={login}>loginFail</button>
              <button onClick={loginSuccess}>loginSuccess</button>
            </div>
            <div>
              {loading.login ? <span>请求中</span> : <span>{user.name ? user.name : '未登录'}</span>}
            </div>
          </div>
        </div>
        <div className="block">
          <h3>请求测试</h3>
          <div>
            <div>
              <button onClick={getList}>获取数据</button>
            </div>
            <div>
              {loading.getList ? <span>请求中</span> : <span>{total}</span>}
            </div>
          </div>
        </div>
        <div className="block">
          <h3>动画测试</h3>
          <div>
            <div>
              <button onClick={this.handleShow(true)}>淡入</button>
              <button onClick={this.handleShow(false)}>淡出</button>
            </div>
            <div>
              <span>{show ? '显示' : '隐藏'}</span>
            </div>
          </div>
        </div>
        <CSSTransition
          in={show}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
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
        </CSSTransition>
      </div>
    );
  }
}
