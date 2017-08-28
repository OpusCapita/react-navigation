import React, { Component, PropTypes } from 'react';
import './Menu.less';

const propTypes = {};
const defaultProps = {};

export default
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { children } = this.props;

    return (
      <div className="oc-menu">
        {children}
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
