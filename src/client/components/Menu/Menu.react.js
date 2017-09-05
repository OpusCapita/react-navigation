import React, { Component, Children } from 'react';
import Types from 'prop-types';
import './Menu.less';
import MenuLogo from '../MenuLogo';
import NavigationBar from '../NavigationBar';
import MenuIconsBar from '../MenuIconsBar';
import MenuSearch from '../MenuSearch';
import themePropTypes from '../theme/theme-prop-types';
import opuscapitaLightTheme from '../theme/opuscapita-light';

const mobileWidth = 990;
const padWidth = 1366;

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
  showSearch: Types.bool,
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
  theme: themePropTypes
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
  showSearch: true,
  iconsBarItems: [],
  containerElement: window,
  theme: opuscapitaLightTheme
};

export default
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerScrolled: false,
      rect: null
    };

    this.handleContainerScroll = this.handleContainerScroll.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    this.props.containerElement.addEventListener('scroll', this.handleContainerScroll);

    this.setRect();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    this.props.containerElement.removeEventListener('scroll', this.handleContainerScroll);
  }

  setRect() {
    this.setState({ rect: this.containerRef.getBoundingClientRect() });
  }

  handleWindowResize() {
    this.setRect();
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
      showSearch,
      iconsBarItems,
      theme
    } = this.props;

    const {
      containerScrolled,
      rect
    } = this.state;

    const isMobile = rect && rect.width < mobileWidth;

    const searchElement = showSearch ? (
      <div className="oc-menu__search-container">
        <MenuSearch
          minWidth={isMobile ? 'calc(100% - 48px)' : 320}
          maxWidth={isMobile ? 'calc(100% - 48px)' : 380}
          placeholder="Search"
        />
      </div>
    ) : null;

    const logoElement = (
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
    );

    const navigationBarElement = (
      <div className="oc-menu__navigation-bar">
        <NavigationBar
          activeItem={activeItem}
          navigationItems={navigationItems}
          theme={theme}
          />
      </div>
    );

    return (
      <div
        ref={ref => this.containerRef = ref}
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
        {!isMobile ? logoElement : null}

        <div className="oc-menu__main-container">
          <div className="oc-menu__top-row">

            {isMobile ? logoElement : null}

            <div className="oc-menu__app-name">
              {appName}
            </div>
            <div className="oc-menu__icons-bar-container">
              {searchElement}
              <MenuIconsBar theme={theme}>
                {Children.toArray(iconsBarItems)}
              </MenuIconsBar>
            </div>
          </div>

          <div className="oc-menu__bottom-row">
            {!isMobile ? navigationBarElement : null}
          </div>

        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
