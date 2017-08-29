import React, { Component } from 'react';
import Types from 'prop-types';
import './Menu.less';
import MenuLogo from '../MenuLogo';
import NavigationBar from '../NavigationBar';

const propTypes = {
  appName: Types.string,
  activeItem: Types.number,
  alwaysAtTop: Types.bool,
  logoSrc: Types.string,
  logoHref: Types.string,
  logoTitle: Types.string,
  labelText: Types.string,
  labelLinkText: Types.string,
  labelLinkHref: Types.string,
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
  activeItem: null,
  logoSrc: '',
  logoTitle: '',
  logoHref: '#',
  labelText: '',
  labelLinkText: '',
  labelLinkHref: '#',
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
      activeItem,
      alwaysAtTop,
      logoSrc,
      logoTitle,
      logoHref,
      labelText,
      labelLinkText,
      labelLinkHref,
      navigationItems
    } = this.props;

    return (
      <div className={`oc-menu ${alwaysAtTop ? 'oc-menu--at-top' : ''}`}>
        <div className="oc-menu__logo-container">
          <MenuLogo
            logoSrc={logoSrc}
            logoTitle={logoTitle}
            logoHref={logoHref}
            labelText={labelText}
            labelLinkText={labelLinkText}
            labelLinkHref={labelLinkHref}
          />
        </div>
        <div className="oc-menu__middle-container">
          <div className="oc-menu__app-name">
            {appName}
          </div>
          <div className="oc-menu__navigation-bar">
            <NavigationBar
              activeItem={activeItem}
              navigationItems={navigationItems}
            />
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
