import React, { Component } from 'react';
import Types from 'prop-types';
import './Menu.less';
import MenuLogo from '../MenuLogo';
import NavigationBar from '../NavigationBar';
import MenuIconsBar from '../MenuIconsBar';

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
  })),
  iconsBarItems: Types.arrayOf(Types.node),
  containerElement: Types.object,
  theme: Types.shape({
    bgColor: Types.string,
    color: Types.string,
    menuIconNotificationColor: Types.string,
    navBgColor: Types.string,
    navColor: Types.string,
    navBorderColor: Types.string,
    navActiveBorderColor: Types.string,
    isNavHoverOverlayDark: Types.bool
  })
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
  navigationItems: [],
  iconsBarItems: [],
  containerElement: window,
  theme: {
    bgColor: '#fff',
    color: '#333',
    menuIconNotificationColor: '#dd2515',
    navBgColor: 'transparent',
    navColor: 'inherit',
    navBorderColor: '#e5e5e5',
    navActiveBorderColor: '#ec6608',
    isNavHoverOverlayDark: false
  }
};

export default
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerScrolled: false
    };

    this.handleContainerScroll = this.handleContainerScroll.bind(this);
  }

  componentDidMount() {
    this.props.containerElement.addEventListener('scroll', this.handleContainerScroll);
  }

  componentWillUnmount() {
    this.props.containerElement.removeEventListener('scroll', this.handleContainerScroll);
  }

  handleContainerScroll(e) {
    if (this.props.containerElement.scrollY) {
      this.setState({ containerScrolled: true });
    } else {
      this.setState({ containerScrolled: false });
    }
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
      navigationItems,
      iconsBarItems,
      theme
    } = this.props;

    const { containerScrolled } = this.state;

    return (
      <div
        className={`
          oc-menu
          ${alwaysAtTop ? 'oc-menu--at-top' : ''}
          ${containerScrolled ? 'oc-menu--scrolled' : ''}
        `}
        style={{
          backgroundColor: theme.bgColor,
          color: theme.color
        }}
      >
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
              theme={theme}
            />
          </div>
        </div>
        <div className="oc-menu__icons-bar-container">
          <MenuIconsBar theme={theme}>
            {iconsBarItems}
          </MenuIconsBar>
        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
