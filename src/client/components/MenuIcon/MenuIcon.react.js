import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuIcon.less';
import TitledButton from '@opuscapita/react-buttons/lib/TitledButton';
import SVG from '@opuscapita/react-svg/lib/SVG';
import isEqual from 'lodash/isEqual';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

const propTypes = {
  svg: Types.string,
  supTitle: Types.string,
  title: Types.string,
  hideDropdownArrow: Types.bool,
  theme: Types.shape({
    color: Types.string,
    menuIconNotificationBgColor: Types.string,
    menuIconNotificationColor: Types.string
  })
};
const defaultProps = {
  svg: '',
  supTitle: '',
  title: '',
  hideDropdownArrow: false,
  theme: {
    color: '#333',
    menuIconNotificationColor: '#fff',
    menuIconNotificationBgColor: '#dd2515'
  }
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

  shouldComponentUpdate(nextProps) {
    return (
      this.props.svg !== nextProps.svg ||
      this.props.supTitle !== nextProps.supTitle ||
      this.props.title !== nextProps.title ||
      this.props.hideDropdownArrow !== nextProps.hideDropdownArrow ||
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
    console.log(theme);
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
          `}
          bgColor="transparent"
          color={theme.color}
          svg={svg}
          svgSize="24px"
          title={isOpened ? '' : title}
        />
        {supTitleElement}
        {dropdownArrowElement}
      </div>
    );
  }
}

MenuIcon.propTypes = propTypes;
MenuIcon.defaultProps = defaultProps;
