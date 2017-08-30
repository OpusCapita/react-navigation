import React, { Component, Children } from 'react';
import Types from 'prop-types';
import './MenuIconsBar.less';


const propTypes = {};
const defaultProps = {};

export default
class MenuIconsBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { children } = this.props;

    const childrenElement = Children.toArray(children).map(child => (
      <div className="oc-menu-icons-bar__child">
        {child}
      </div>
    ));

    return (
      <div className="oc-menu-icons-bar">
        {childrenElement}
      </div>
    );
  }
}

MenuIconsBar.propTypes = propTypes;
MenuIconsBar.defaultProps = defaultProps;
