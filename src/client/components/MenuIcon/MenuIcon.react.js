/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Types from 'prop-types';
import { TitledButton } from '@opuscapita/react-buttons';
import { SVG } from '@opuscapita/react-svg';
import { mobileWidth } from "../constants";
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');
const closeSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/close.svg');
const defaultSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/help.svg');

const propTypes = {
  svg: Types.string,
  supTitle: Types.string,
  title: Types.string,
  tabletOverlayMode: Types.bool,
  tabletOverlayModeLeft: Types.bool,
  label: Types.string,
  hideDropdownArrow: Types.bool,
  onClick: Types.func
};
const defaultProps = {
  svg: defaultSVG,
  supTitle: '',
  label: '',
  title: '',
  tabletOverlayMode: false,
  tabletOverlayModeLeft: false,
  hideDropdownArrow: false,
  onClick: () => {}
};

export default
class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      isMobile: this.getIsMobile()
    };
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleBodyKeyDown = this.handleBodyKeyDown.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
    document.body.addEventListener('keydown', this.handleBodyKeyDown);
    window.addEventListener('resize', this.handleWindowResize);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.svg !== nextProps.svg ||
      this.props.supTitle !== nextProps.supTitle ||
      this.props.title !== nextProps.title ||
      this.props.label !== nextProps.label ||
      this.props.hideDropdownArrow !== nextProps.hideDropdownArrow ||
      this.state.isOpened !== nextState.isOpened ||
      this.state.isMobile !== nextState.isMobile
    );
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
    document.body.removeEventListener('keydown', this.handleBodyKeyDown);
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ isMobile: this.getIsMobile() });
  }

  handleBodyClick(event) {
    let clickedOutside = !this.containerRef.contains(event.target);

    if (clickedOutside) {
      this.handleHideChildren();
    }
  }

  handleBodyKeyDown(event) {
    if (event.which === 9 || event.which === 27) { // TAB or ESC key
      this.handleHideChildren();
    }
  }

  handleShowChildren = () => {
    this.setState({ isOpened: true });
  }

  handleHideChildren = () => {
    this.setState({ isOpened: false });
  }

  handleClick = () => {
    if (this.state.isOpened) {
      this.handleHideChildren();
    } else {
      this.handleShowChildren();
    }

    this.props.onClick();
  }

  getIsMobile = () => {
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return width < mobileWidth;
  }

  render() {
    const {
      svg,
      supTitle,
      title,
      tabletOverlayMode,
      tabletOverlayModeLeft,
      label,
      hideDropdownArrow,
      onClick, // eslint-disable-line no-unused-vars
      children,
      ...restProps
    } = this.props;

    const { isOpened, isMobile } = this.state;

    const supTitleElement = supTitle ? (
      <div
        className="oc-menu-icon__sup-title"
      >
        {supTitle}
      </div>
    ) : null;


    const showDropdownArrow = !isMobile && (children && !hideDropdownArrow);
    const dropdownArrowElement = showDropdownArrow ? (
      <div className="oc-menu-icon__dropdown-icon">
        <SVG svg={dropdownSVG} />
      </div>
    ) : null;

    let childrenElement = (children && isOpened) ? (
      <div
        className={`
          oc-menu-icon__sub-items-container
          ${showDropdownArrow ? 'oc-menu-icon__sub-items-container--with-dropdown' : ''}
          ${tabletOverlayMode ? 'oc-menu-icon__sub-items-container--tablet-overlay-mode' : ''}
          ${
            (tabletOverlayMode && tabletOverlayModeLeft) ?
              'oc-menu-icon__sub-items-container--tablet-overlay-mode-left' : ''
          }
          ${
            (tabletOverlayMode && !tabletOverlayModeLeft) ?
              'oc-menu-icon__sub-items-container--tablet-overlay-mode-right' : ''
          }
        `}
        onClick={e => e.stopPropagation()}
      >
        {tabletOverlayMode && (
          <div className="oc-menu-icon__sub-items-container--tablet-overlay-header">
            <MenuIcon svg={closeSVG} onClick={this.handleHideChildren} />
          </div>
        )}
        {children}
      </div>
    ) : null;

    let childrenArrowElement = (children && isOpened && !tabletOverlayMode) ? (
      <div
        className="oc-menu-icon__children-arrow"
      >
      </div>
    ) : null;

    return (
      <div
        ref={ref => (this.containerRef = ref)}
        className={"oc-menu-icon " + (isOpened ? "oc-menu-icon--opened" : "")}
        onClick={this.handleClick}
        {...restProps}
      >
        <div className={`oc-menu-icon__container`}>
          <TitledButton
            className={`
              oc-menu-icon__button
              ${showDropdownArrow ? 'oc-menu-icon__button--with-dropdown' : ''}
              ${supTitle ? 'oc-menu-icon__button--with-suptitle' : ''}
              ${'oc-menu-icon__button--light-overlay'}
            `}
            svg={(isMobile || !label) ? svg : ''}
            title={isOpened ? '' : title}
            label={isMobile ? '' : label}
            contentPosition="before"
          />
          {supTitleElement}
          {dropdownArrowElement}
          {childrenArrowElement}
        </div>
        {childrenElement}
        {(children && isOpened && tabletOverlayMode) && (
          <div className="oc-menu-icon__overlay"></div>
        )}
      </div>
    );
  }
}

MenuIcon.propTypes = propTypes;
MenuIcon.defaultProps = defaultProps;
