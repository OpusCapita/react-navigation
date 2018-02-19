/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuIcon.less';
import { TitledButton } from '@opuscapita/react-buttons';
import { SVG } from '@opuscapita/react-svg';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

const propTypes = {
  svg: Types.string,
  supTitle: Types.string,
  title: Types.string,
  label: Types.string,
  hideDropdownArrow: Types.bool,
  onClick: Types.func
};
const defaultProps = {
  svg: '',
  supTitle: '',
  label: '',
  title: '',
  hideDropdownArrow: false,
  onClick: () => {}
};

export default
class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
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
      this.state.isOpened !== nextState.isOpened
    );
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
    document.body.removeEventListener('keydown', this.handleBodyKeyDown);
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

  render() {
    const {
      svg,
      supTitle,
      title,
      label,
      hideDropdownArrow,
      onClick, // eslint-disable-line no-unused-vars
      children,
      ...restProps
    } = this.props;

    const { isOpened } = this.state;
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

    let childrenElement = (children && isOpened) ? (
      <div
        className={`
          oc-menu-icon__sub-items-container
          ${showDropdownArrow ? 'oc-menu-icon__sub-items-container--with-dropdown' : ''}
        `}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    ) : null;

    let childrenArrowElement = (children && isOpened) ? (
      <div
        className="oc-menu-icon__children-arrow"
      >
      </div>
    ) : null;

    return (
      <div
        ref={ref => (this.containerRef = ref)}
        className="oc-menu-icon"
        onClick={this.handleClick}
        {...restProps}
      >
        <div className="oc-menu-icon__container">
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
      </div>
    );
  }
}

MenuIcon.propTypes = propTypes;
MenuIcon.defaultProps = defaultProps;
