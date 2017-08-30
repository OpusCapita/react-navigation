import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuIcon.less';
import Button from '@opuscapita/react-buttons/lib/Button';
import SVG from '@opuscapita/react-svg/lib/SVG';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

const propTypes = {
  bgColor: Types.string,
  color: Types.string,
  svg: Types.string,
  supTitle: Types.string,
  hideDropdownArrow: Types.bool
};
const defaultProps = {
  bgColor: '#fff',
  color: '#333',
  svg: '',
  supTitle: '',
  hideDropdownArrow: false
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

  showChildren = (key) => {
    this.setState({ openedItem: key, animationEnded: false });
  }

  hideChildren = () => {
    this.setState({ openedItem: null, animationEnded: false });
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
      bgColor,
      color,
      svg,
      supTitle,
      hideDropdownArrow,
      onClick,
      children
    } = this.props;

    const supTitleElement = supTitle ? (
      <div className="oc-menu-icon__sup-title">
        {supTitle}
      </div>
    ) : null;

    const showDropdownArrow = (children && !hideDropdownArrow);
    const dropdownArrowElement =  showDropdownArrow ? (
      <div className="oc-menu-icon__dropdown-icon">
        <SVG svg={dropdownSVG} />
      </div>
    ) : null;

    return (
      <div
        ref={ref => (this.containerRef = ref)}
        className="oc-menu-icon"
        onClick={this.handleClick}
        style={{ backgroundColor: bgColor }}
      >
        <Button
          className={`
            oc-menu-icon__button
            ${showDropdownArrow ? 'oc-menu-icon__button--with-dropdown' : ''}
            ${supTitle ? 'oc-menu-icon__button--with-suptitle' : ''}
          `}
          bgColor="transparent"
          color={color}
          svg={svg}
          svgSize="24px"
        />
        {supTitleElement}
        {dropdownArrowElement}
      </div>
    );
  }
}

MenuIcon.propTypes = propTypes;
MenuIcon.defaultProps = defaultProps;