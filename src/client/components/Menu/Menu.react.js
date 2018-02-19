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
  iconsBarItems: Types.arrayOf(Types.node),
  containerElement: Types.object
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
  iconsBarItems: [],
  containerElement: window
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
    this.setState({ containerScrolled: new Boolean(this.props.containerElement.scrollY) });
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
      containerScrolled,
      rect
    } = this.state;

    const searchElement = showSearch ? (
      <div className="oc-menu__search-container">
        <MenuSearch { ...searchProps } />
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

    return (
      <div
        ref={ref => (this.containerRef = ref)}
        data-test="oc-menu"
        className={`
          oc-menu
          ${className}
          ${alwaysAtTop ? 'oc-menu--at-top' : ''}
          ${containerScrolled ? 'oc-menu--scrolled' : ''}
          ${noMargin ? 'oc-menu--no-margin' : ''}
        `}
      >
        <div className="oc-menu__left-col">
          <MenuLogo
            logoSrc={logoSrc}
            logoTitle={logoTitle}
            logoHref={logoHref}
            labelText={labelText}
            labelLinkText={labelLinkText}
            labelLinkHref={labelLinkHref}
          />
        </div>
        <div className="oc-menu__middle-col">
          <div className="oc-menu__middle-col-top-row">
            <h1
              className="oc-menu__app-name"
              data-test="oc-menu__app-name"
            >
              {appName}
            </h1>
          </div>
          <div className="oc-menu__middle-col-bottom-row">
            {navigationBarElement}
          </div>

        </div>
        <div className="oc-menu__right-col">
          <div className="oc-menu__icons-bar-container">
            {searchElement}
            <MenuIconsBar>
              {Children.toArray(iconsBarItems)}
            </MenuIconsBar>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
