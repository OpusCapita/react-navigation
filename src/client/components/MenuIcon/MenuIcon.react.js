/* eslint-disable react/jsx-pascal-case */
import React, {Component} from "react";
import Types from "prop-types";
import {TitledButton} from "@opuscapita/react-buttons";
import {SVG} from "@opuscapita/react-svg";
import "./MenuIcon.less";
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');
const closeSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/close.svg');

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
  svg: '',
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
      isHidden: false
    };
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleBodyKeyDown = this.handleBodyKeyDown.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
    document.body.addEventListener('keydown', this.handleBodyKeyDown);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.svg !== nextProps.svg ||
      this.props.supTitle !== nextProps.supTitle ||
      this.props.title !== nextProps.title ||
      this.props.label !== nextProps.label ||
      this.props.hideDropdownArrow !== nextProps.hideDropdownArrow ||
      this.state.isOpened !== nextState.isOpened ||
      this.state.isHidden !== nextState.isHidden
    );
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
    document.body.removeEventListener('keydown', this.handleBodyKeyDown);
  }

  handleBodyClick(event) {
    let clickedOutside = this.containerRef && !this.containerRef.contains(event.target);

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
  
  setIsHidden = (isHidden = false) => {
    this.setState({ isHidden })
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

    const { isOpened, isHidden } = this.state;
    const supTitleElement = supTitle ? (
      <div
        className="oc-menu-icon__sup-title"
      >
        {supTitle}
      </div>
    ) : null;

    const showDropdownArrow = (children && !hideDropdownArrow);
    const dropdownArrowElement = showDropdownArrow ? (
      <div className="oc-menu-icon__dropdown-icon">
        <SVG svg={dropdownSVG} />
      </div>
    ) : null;

    const childrenWithModifiedProps = React.Children.map(children, child =>
      React.cloneElement(child, {...child.props, setIsHidden: this.setIsHidden})
    );
    let childrenElement = (childrenWithModifiedProps && isOpened) ? (
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
            <MenuIcon svg={closeSVG} onClick={this.hideChildren} />
          </div>
        )}
        {childrenWithModifiedProps}
      </div>
    ) : null;

    let childrenArrowElement = (childrenWithModifiedProps && isOpened && !tabletOverlayMode) ? (
      <div
        className="oc-menu-icon__children-arrow"
      >
      </div>
    ) : null;

    return !isHidden ? (
      <div
        className="oc-menu-icon__wrapper"
        data-test="oc-menu-icon__wrapper"
      >
        <div
          ref={ref => (this.containerRef = ref)}
          className="oc-menu-icon"
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
              svg={svg}
              title={isOpened ? '' : title}
              label={label}
              contentPosition="before"
            />
            {supTitleElement}
            {dropdownArrowElement}
            {childrenArrowElement}
          </div>
          {childrenElement}
          {(childrenWithModifiedProps && isOpened && tabletOverlayMode) && (
            <div className="oc-menu-icon__overlay"></div>
          )}
        </div>
      </div>
    ) : null;
  }
}

MenuIcon.propTypes = propTypes;
MenuIcon.defaultProps = defaultProps;
