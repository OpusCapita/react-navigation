import React, { Component } from 'react';
import Types from 'prop-types';
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
      <div className="oc-menu-dropdown-list">
      </div>
    );
  }
}

MenuDropdownList.propTypes = propTypes;
MenuDropdownList.defaultProps = defaultProps;