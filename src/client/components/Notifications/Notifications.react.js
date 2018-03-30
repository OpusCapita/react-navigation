import React, { Component } from 'react';
import './Notifications.less';

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
        <div
          ref={ref => (this.containerRef = ref)}
          className="oc-notifications__items-container"
        >
          {children}
        </div>
      </div>
    );
  }
}
