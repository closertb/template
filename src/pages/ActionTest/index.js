/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'dva';

@connect(({ index }) => ({ ...index }), dispatch => ({
  _add() {
    dispatch({ type: 'index/add' });
  },
  _subtract() {
    dispatch({ type: 'index/subtract' });
  },
  login(payload) {
    dispatch({ type: 'index/login', payload: { name: 'dom', pwd: '123456' } });
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
    const { error, loading, count, login } = this.props;
    if (error) {
      return <div>{error.msg}</div>;
    }
    return (
      <div>
        {loading && <h3>loading</h3>}
        <span>计数:{count}</span>
        <button onClick={this.add}>加1</button>
        <button onClick={this.subtract}>减1</button>
        <button onClick={login}>login</button>
      </div>
    );
  }
}
