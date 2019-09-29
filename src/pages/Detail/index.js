import React from 'react';
import showdown from 'showdown';
import HomeDesc from '../../components/HomeDesc';
import { SITE_NAME } from '../../configs/constants';

const converter = new showdown.Converter();

export default class Root extends React.PureComponent {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.state = { html: '<h1>show me code</h1>' };
  }

  handleTest = () => {
    fetch('https://api.github.com/repos/closertb/MyBlog/issues').then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject();
    }).then((data) => {
      console.log('data', data);
      const { body } = data[0];
      const html = converter.makeHtml(body);

      console.log('ref', this.contentRef);
      console.log('data:', html);
      // this.contentRef.append(html);
      this.setState({ html });
    });
  }

  render() {
    const { html } = this.state;
    return (
      <div>
        <h1 onClick={this.handleTest}>this is a home page</h1>
        <HomeDesc name={SITE_NAME} />
        <div ref={this.contentRef} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}
