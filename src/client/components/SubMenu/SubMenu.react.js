import React, { Component, PropTypes } from 'react';
import './SubMenu.less';

const propTypes = {};
const defaultProps = {};

export default
class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="sub-menu">
      </div>
    );
  }
}

SubMenu.propTypes = propTypes;
SubMenu.defaultProps = defaultProps;
