import * as React from 'react';
import * as CSSModule from 'react-css-modules';
const styles = require('./index.less')

@CSSModule(styles)
export default class Index extends React.PureComponent {
  render() {
    return <div styleName="name">12</div>;
  }
}
