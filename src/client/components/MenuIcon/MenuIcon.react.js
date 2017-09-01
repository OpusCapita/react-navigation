import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuIcon.less';
import themePropTypes from '../theme/theme-prop-types';
import opuscapitaLightTheme from '../theme/opuscapita-light';
import { spring, presets, Motion } from 'react-motion';
import TitledButton from '@opuscapita/react-buttons/lib/TitledButton';
import SVG from '@opuscapita/react-svg/lib/SVG';
import isEqual from 'lodash/isEqual';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

const propTypes = {
  svg: Types.string,
  supTitle: Types.string,
  title: Types.string,
  hideDropdownArrow: Types.bool,
  theme: themePropTypes
};
const defaultProps = {
  svg: '',
  supTitle: '',
  title: '',
  hideDropdownArrow: false,
  theme: opuscapitaLightTheme
};

const springPreset = presets.stiff;

export default
class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      animationEnded: false
    };
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleBodyKeyDown = this.handleBodyKeyDown.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
    document.body.addEventListener('keydown', this.handleBodyKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
    document.body.removeEventListener('keydown', this.handleBodyKeyDown);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.svg !== nextProps.svg ||
      this.props.supTitle !== nextProps.supTitle ||
      this.props.title !== nextProps.title ||
      this.props.hideDropdownArrow !== nextProps.hideDropdownArrow ||
      this.state.isOpened !== nextState.isOpened ||
      this.state.animationEnded !== nextState.animationEnded ||
      !isEqual(this.props.theme, nextProps.theme)
   );
  }

  handleBodyClick(event) {
    let clickedOutside = !this.containerRef.contains(event.target);

    if (clickedOutside) {
      this.hideChildren();
    }
  }

  handleBodyKeyDown(event) {
    if (event.which === 9 || event.which === 27) { // TAB or ESC key
      this.hideChildren();
    }
  }

  showChildren = () => {
    this.setState({ isOpened: true });
  }

  hideChildren = () => {
    this.setState({ isOpened: false });
  }

  handleClick = () => {
    if (this.state.isOpened) {
      this.hideChildren();
    } else {
      this.showChildren();
    }

    this.props.onClick();
  }

  handleAnimationEnd = () => {
    this.setState({ animationEnded: true });
  }

  render() {
    const {
      bgColor,
      color,
      svg,
      supTitle,
      title,
      hideDropdownArrow,
      onClick,
      children,
      theme
    } = this.props;

    const { isOpened } = this.state;
    const supTitleElement = supTitle ? (
      <div
        className="oc-menu-icon__sup-title"
        style={{
          backgroundColor: theme.menuIconNotificationBgColor,
          color: theme.menuIconNotificationColor
        }}
      >
        {supTitle}
      </div>
    ) : null;

    const showDropdownArrow = (children && !hideDropdownArrow);
    const dropdownArrowElement =  showDropdownArrow ? (
      <div className="oc-menu-icon__dropdown-icon">
        <SVG svg={dropdownSVG} style={{ fill: theme.color }} />
      </div>
    ) : null;

    let childrenElement = null;

    if (children) {
      childrenElement = (
        <Motion
          defaultStyle={{ x: isOpened ? 1 : 0, y: isOpened ? 100 : 0 }}
          style={{
            x: isOpened ? spring(1, springPreset) : spring(0, springPreset)
          }}
          onRest={this.handleAnimationEnd}
        >
          {interpolatedStyle => (
            <div
              className="oc-menu-icon__sub-items-container"
              onClick={e => e.stopPropagation()}
              style={{
                opacity: interpolatedStyle.x,
                pointerEvents: isOpened ? 'auto' : 'none',
                height: isOpened ? 'auto' : (this.state.animationEnded ? '0' : 'auto')
              }}
            >
              {children}
            </div>
          )}
        </Motion>
      );
    }
    console.log('chil', childrenElement);
    return (
      <div
        ref={ref => (this.containerRef = ref)}
        className="oc-menu-icon"
        onClick={this.handleClick}
      >
        <TitledButton
          className={`
            oc-menu-icon__button
            ${showDropdownArrow ? 'oc-menu-icon__button--with-dropdown' : ''}
            ${supTitle ? 'oc-menu-icon__button--with-suptitle' : ''}
            ${theme.isMenuIconHoverOverlayDark ? 'oc-menu-icon__button--dark-overlay' : 'oc-menu-icon__button--light-overlay'}
          `}
          bgColor="transparent"
          color={theme.color}
          svg={svg}
          svgSize="24px"
          title={isOpened ? '' : title}
        />
        {supTitleElement}
        {dropdownArrowElement}
        {childrenElement}
      </div>
    );
  }
}

MenuIcon.propTypes = propTypes;
MenuIcon.defaultProps = defaultProps;
