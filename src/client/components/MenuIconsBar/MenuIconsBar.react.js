import React, { Component, Children } from 'react';
import './MenuIconsBar.less';

export default
class MenuIconsBar extends Component {
  render() {
    const { children } = this.props;

    const childrenElement = Children.toArray(children).map((child, i) => (
      <div
        key={i}
        className="oc-menu-icons-bar__child"
        data-test="oc-menu-icons-bar__child"
      >
        {({ ...child, props: { ...child.props } })}
      </div>
    ));

    return (
      <div
        className="oc-menu-icons-bar"
        data-test="oc-menu-icons-bar"
      >
        {childrenElement}
      </div>
    );
  }
}
