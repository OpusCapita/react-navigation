import React, { Component, Children } from 'react';
import Types from 'prop-types';
import './MenuIconsBar.less';
import themePropTypes from '../theme/theme-prop-types';
import opuscapitaLightTheme from '../theme/opuscapita-light';

const propTypes = {
  theme: themePropTypes
};
const defaultProps = {
  theme: opuscapitaLightTheme
};

export default
class MenuIconsBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { children, theme } = this.props;

    const childrenElement = Children.toArray(children).map((child, i) => (
      <div key={i} className="oc-menu-icons-bar__child">
        {({ ...child, props: { ...child.props, theme } })}
      </div>
    ));

    return (
      <div className="oc-menu-icons-bar">
        {childrenElement}
      </div>
    );
  }
}

MenuIconsBar.propTypes = propTypes;
MenuIconsBar.defaultProps = defaultProps;
