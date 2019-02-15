import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import './MenuIconsBar.less';

const propTypes = {
  tabletOverlayMode: PropTypes.bool,
  tabletOverlayModeLeft: PropTypes.bool
};

const defaultProps = {
  tabletOverlayMode: false,
  tabletOverlayModeLeft: false
};

export default
class MenuIconsBar extends Component {
  render() {
    const { children, tabletOverlayMode, tabletOverlayModeLeft } = this.props;

    const childrenElement = Children.toArray(children).map(child =>
      ({ ...child, props: { ...child.props, tabletOverlayMode, tabletOverlayModeLeft } })
    );

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

MenuIconsBar.propTypes = propTypes;
MenuIconsBar.defaultProps = defaultProps;