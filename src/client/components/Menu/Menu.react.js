import React, { Component, Children } from 'react';
import Types from 'prop-types';
import './Menu.less';
import MenuLogo from '../MenuLogo';
import NavigationBar from '../NavigationBar';
import MenuIconsBar from '../MenuIconsBar';
import MenuSearch from '../MenuSearch';
import '../theme/opuscapita-dark.less';

const propTypes = {
  appName: Types.string,
  activeItem: Types.number,
  alwaysAtTop: Types.bool,
  className: Types.string,
  logoSrc: Types.string,
  logoHref: Types.string,
  logoTitle: Types.string,
  labelText: Types.string,
  labelLinkText: Types.string,
  labelLinkHref: Types.string,
  noMargin: Types.bool,
  showSearch: Types.bool,
  searchProps: Types.object,
  navigationItems: Types.arrayOf(Types.shape({
    label: Types.string,
    href: Types.string,
    subItems: Types.arrayOf(Types.shape({
      label: Types.string,
      href: Types.string
    }))
  })),
  iconsBarItems: Types.arrayOf(Types.node)
};
const defaultProps = {
  appName: '',
  alwaysAtTop: false,
  activeItem: null,
  className: 'oc-menu--opuscapita-dark-theme',
  logoSrc: '',
  logoTitle: '',
  logoHref: '#',
  labelText: '',
  labelLinkText: '',
  labelLinkHref: '#',
  noMargin: false,
  navigationItems: [],
  showSearch: true,
  searchProps: {
    placeholder: 'Search'
  },
  iconsBarItems: []
};

const menuHeight = 70;
const iconsBarWidth = 640;
const tabletPortraitWidth = 1024;
const mobilePortraitWidth = 768;

export default
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMinimized: false,
      rect: null
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('scroll', this.handleContainerScroll);

    this.setRect();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleContainerScroll);
  }

  setRect = () => {
    this.setState({ rect: this.container.getBoundingClientRect() });
  }

  handleWindowResize = () => {
    this.setRect();
  }

  handleContainerScroll = (e) => {
    if (this.props.alwaysAtTop) {
      this.setState({ isMinimized: window.pageYOffset > menuHeight });
    }
  }

  render() {
    const {
      appName,
      activeItem,
      alwaysAtTop,
      className,
      logoSrc,
      logoTitle,
      logoHref,
      labelText,
      labelLinkText,
      labelLinkHref,
      noMargin,
      navigationItems,
      showSearch,
      searchProps,
      iconsBarItems
    } = this.props;

    const {
      isMinimized
    } = this.state;

    let { container, iconsBarContainer, leftCol, middleColBottomRow } = this;
    let mounted = !!(container && iconsBarContainer && leftCol && middleColBottomRow);

    let width = Math.max(
      document.documentElement.clientWidth, window.innerWidth || 0
    );

    let isTabletPortrait =  width < tabletPortraitWidth && width >= mobilePortraitWidth;
    let isMobilePortrait =  width < mobilePortraitWidth;

    let minimizeSearch = isTabletPortrait || (
      mounted &&
      (container.clientWidth - leftCol.clientWidth - middleColBottomRow.clientWidth) < iconsBarWidth
    );

    const searchElement = (showSearch && !isMobilePortrait) ? (
      <div className="oc-menu__search-container">
        <MenuSearch isMinimized={minimizeSearch} { ...searchProps } />
      </div>
    ) : null;

    const navigationBarElement = (
      <div className="oc-menu__navigation-bar">
        <NavigationBar
          activeItem={activeItem}
          navigationItems={navigationItems}
        />
      </div>
    );

    const menuLogoElement = isMobilePortrait ? null : (
      <MenuLogo
        logoSrc={logoSrc}
        logoTitle={logoTitle}
        logoHref={logoHref}
        labelText={labelText}
        labelLinkText={labelLinkText}
        labelLinkHref={labelLinkHref}
        showLabel={!isMinimized || isTabletPortrait}
      />
    );

    const appNameElement = isMobilePortrait ? null : (
      <h1
        className={`
          oc-menu__app-name
          ${(isMinimized && !isTabletPortrait) ? 'oc-menu__app-name--minimized' : ''}
        `}
        data-test="oc-menu__app-name"
      >
        {appName}
      </h1>
    );

    return (
      <div
        ref={ref => (this.container = ref)}
        data-test="oc-menu"
        className={`
          oc-menu
          ${className}
          ${alwaysAtTop ? 'oc-menu--at-top' : ''}
          ${isMinimized && !isTabletPortrait ? 'oc-menu--minimized' : ''}
          ${noMargin ? 'oc-menu--no-margin' : ''}
        `}
      >
        <div
          className="oc-menu__left-col"
          ref={ref => (this.leftCol = ref)}
        >
          {menuLogoElement}
        </div>
        <div className="oc-menu__middle-col">
          <div className="oc-menu__middle-col-top-row">
            {appNameElement}
            <div
              className="oc-menu__icons-bar-container"
              ref={ref => (this.iconsBarContainer = ref)}
            >
              <MenuIconsBar>
                {searchElement}
                {Children.toArray(iconsBarItems)}
              </MenuIconsBar>
            </div>
          </div>
          <div
            className="oc-menu__middle-col-bottom-row"
            ref={ref => (this.middleColBottomRow = ref)}
          >
            {navigationBarElement}
          </div>

        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
