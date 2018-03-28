import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import './MenuIconsBar.less';

const propTypes = {
  tabletOverlayMode: PropTypes.bool
};

const defaultProps = {
  tabletOverlayMode: false
};

export default
class MenuIconsBar extends Component {
  render() {
    const { children, tabletOverlayMode } = this.props;

    const childrenElement = Children.toArray(children).map((child, i) => console.log(child) || (
      <div
        key={i}
        className="oc-menu-icons-bar__child"
        data-test="oc-menu-icons-bar__child"
      >
        {({ ...child, props: { ...child.props, tabletOverlayMode } })}
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
