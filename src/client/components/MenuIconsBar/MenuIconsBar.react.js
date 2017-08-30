import React, { Component, PropTypes } from 'react';
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
    return (
      <div className="menu-icons-bar">
      </div>
    );
  }
}

MenuIconsBar.propTypes = propTypes;
MenuIconsBar.defaultProps = defaultProps;
