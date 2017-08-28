import React, { Component, PropTypes } from 'react';
import './SubMenuItem.less';

const propTypes = {};
const defaultProps = {};

export default
class SubMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="sub-menu-item">
      </div>
    );
  }
}

SubMenuItem.propTypes = propTypes;
SubMenuItem.defaultProps = defaultProps;
