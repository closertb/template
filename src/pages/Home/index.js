import React from 'react';
import HomeDesc from '../../components/HomeDesc';
import { SITE_NAME } from '../../configs/constants';

export default class Root extends React.PureComponent {
  render() {
    console.log('home');
    return (
      <div>
        <h1>this is a home page</h1>
        <HomeDesc name={SITE_NAME} />
        <h3 style={{ textAlign: 'center' }}>
          项目地址：
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/closertb/template">Git 跳转到</a>
        </h3>
      </div>

    );
  }
}
