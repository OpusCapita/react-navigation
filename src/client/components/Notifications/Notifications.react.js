import React, { Component } from 'react';
import './Notifications.less';

export default
class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleWheel = (e) => {
    const containerRect = this.containerRef.getBoundingClientRect();
    console.log(this.containerRef.scrollTop, this.containerRef.scrollHeight, containerRect.height);
    // if(
    //   (this.containerRef.scrollTop === (this.containerRef.scrollHeight - containerRect.height) && e.deltaY < 0) ||
    //   (this.containerRef.scrollTop === 0 && e.deltaY > 0)
    // ) {
    //   e.preventDefault();
    // }
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
          onWheel={this.handleWheel}
        >
          {children}
        </div>
      </div>
    );
  }
}
