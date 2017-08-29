import React, { Component } from 'react';
import Types from 'prop-types';
import './Menu.less';
import MenuLogo from '../MenuLogo';
import NavigationBar from '../NavigationBar';

const propTypes = {
  appName: Types.string,
  alwaysAtTop: Types.bool,
  navigationItems: Types.arrayOf(Types.shape({
    label: Types.string,
    href: Types.string,
    subItems: Types.arrayOf(Types.shape({
      label: Types.string,
      href: Types.string
    }))
  }))
};
const defaultProps = {
  appName: '',
  alwaysAtTop: false,
  navigationItems: []
};

export default
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      appName,
      alwaysAtTop,
      navigationItems
    } = this.props;

    return (
      <div className={`oc-menu ${alwaysAtTop ? 'oc-menu--at-top' : ''}`}>
        <div className="oc-menu__logo-container">
          <MenuLogo
            logoSrc="http://test.jcatalog.com/oc-logo-rgb.svg"
            logoTitle="OpusCapita"
            logoHref="http://opuscapita.com"
            labelText="powered by"
            labelLinkText="OpusCapita"
            labelLinkHref="http://opuscapita.com"
          />
        </div>
        <div className="oc-menu__middle-container">
          <div className="oc-menu__app-name">
            {appName}
          </div>
          <div className="oc-menu__navigation-bar">
            <NavigationBar navigationItems={navigationItems} />
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
