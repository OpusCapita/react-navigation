import React, { Component, PropTypes } from 'react';
import './MenuDropdownList.less';

const propTypes = {};
const defaultProps = {};

export default
class MenuDropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="menu-dropdown-list">
      </div>
    );
  }
}

MenuDropdownList.propTypes = propTypes;
MenuDropdownList.defaultProps = defaultProps;
