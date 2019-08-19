import React from 'react';
import HomeDesc from '../../components/HomeDesc';
import { siteName } from '../../configs/constants';

export default class Root extends React.PureComponent {
  render() {
    console.log('what');
    return (
      <div>
        <h1>this is a home page</h1>
        <HomeDesc name={siteName} />
      </div>

    );
  }
}
