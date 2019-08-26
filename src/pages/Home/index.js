import React from 'react';
import HomeDesc from '../../components/HomeDesc';
import { SITE_NAME } from '../../configs/constants';

export default class Root extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>this is a home page</h1>
        <HomeDesc name={SITE_NAME} />
      </div>

    );
  }
}
