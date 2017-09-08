import React, { Component } from 'react';
import Types from 'prop-types';
import './Notifications.less';

const propTypes = {};
const defaultProps = {};

export default
class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      children
    } = this.props;

    return (
      <div className="oc-notifications">
        <div className="oc-notifications__items-container">
          {children}
        </div>
      </div>
    );
  }
}

Notifications.propTypes = propTypes;
Notifications.defaultProps = defaultProps;
