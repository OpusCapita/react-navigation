import React, { Component } from 'react';
import Types from 'prop-types';
import './NavigationBar.less';
import { spring, presets, Motion } from 'react-motion';
import SVG from '@opuscapita/react-svg/lib/SVG';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

const propTypes = {
  activeItem: Types.number,
  openedItem: Types.number,
  navigationItems: Types.arrayOf(Types.shape({
    label: Types.string,
    href: Types.string,
    subItems: Types.arrayOf(Types.shape({
      label: Types.string,
      href: Types.string,
      onClick: Types.func
    }))
  }))
};
const defaultProps = {
  openedItem: null,
  activeItem: null,
  navigationItems: []
};

const springPreset = presets.stiff;

export default
class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedItem: null,
      animationEnded: true
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
      this.hideTopLevelItem();
    }
  }

  handleBodyKeyDown(event) {
    if (event.which === 9 || event.which === 27) { // TAB or ESC key
      this.hideTopLevelItem();
    }
  }

  showTopLevelItem = (key) => {
    this.setState({ openedItem: key, animationEnded: false });
  }

  hideTopLevelItem = () => {
    this.setState({ openedItem: null, animationEnded: false });
  }

  handleTopLevelItemClick = (key) => {
    if (this.state.openedItem === key) {
      this.hideTopLevelItem();
    } else {
      this.showTopLevelItem(key);
    }
  }

  handleAnimationEnd = () => {
    this.setState({ animationEnded: true });
  }

  renderClickableElement = (item, key, className) => {
    const { href, label, subItems, onClick } = item;

    let dropdownIcon = item.subItems ? (
      <div className="oc-navigation-bar__dropdown-icon">
        <SVG svg={dropdownSVG} />
      </div>
    ) : null;

    let clickableElement = null;

    if (href) {
      clickableElement = (
        <a
          href={href}
          onClick={onClick || (() => {})}
          className={`
            oc-navigation-bar__clickable-element
            ${dropdownIcon ? 'oc-navigation-bar__clickable-element--with-dropdown' : ''}
          `}
        >
          {label}
        </a>
      );
    } else {
      clickableElement = (
        <button
          href={href}
          onClick={onClick || (() => {})}
          className={`
            oc-navigation-bar__clickable-element
            ${dropdownIcon ? 'oc-navigation-bar__clickable-element--with-dropdown' : ''}
          `}
        >
          {label}
        </button>
      );
    }

    return (
      <div
        key={key}
        className="oc-navigation-bar__clickable-element-container"
      >
        {clickableElement}
        {dropdownIcon}
      </div>
    );
  }

  renderTopLevelItem = (navigationItem, key) => {
    const clickableItem = this.renderClickableElement(navigationItem, key);
    const isActive = this.props.activeItem === key;

    let subItems = null;
    let isOpened = this.state.openedItem === key;

    if (navigationItem.subItems) {
      subItems = (
        <Motion
          defaultStyle={{ x: isOpened ? 1 : 0, y: isOpened ? 100 : 0 }}
          style={{
            x: isOpened ? spring(1, springPreset) : spring(0, springPreset)
          }}
          onRest={this.handleAnimationEnd}
        >
          {interpolatedStyle => (
            <ul
              className="oc-navigation-bar__sub-items-container"
              style={{
                opacity: interpolatedStyle.x,
                pointerEvents: isOpened ? 'auto' : 'none',
                height: isOpened ? 'auto' : (this.state.animationEnded ? '0' : 'auto')
              }}
            >
              {navigationItem.subItems.map((subItem, i) => this.renderSubLevelItem(subItem, i))}
            </ul>
          )}
        </Motion>
      );
    }

    return (
      <li
        key={key}
        className={`
          oc-navigation-bar__top-level-item
          ${isActive ? 'oc-navigation-bar__top-level-item--active' : ''}
        `}
        onClick={() => this.handleTopLevelItemClick(key)}
        >
        {clickableItem}
        {subItems}
      </li>
    );
  }

  renderSubLevelItem = (subItem, key) => {
    return (
      <li
        key={key}
        className="oc-navigation-bar__sub-item"
      >
        {this.renderClickableElement(subItem, key)}
      </li>
    );
  }

  render() {
    let {
      navigationItems
    } = this.props;

    const navigationItemsElement = navigationItems.map(
      (navigationItem, i) => this.renderTopLevelItem(navigationItem, i)
    );

    return (
      <ul
        ref={ref => (this.containerRef = ref)}
        className="oc-navigation-bar"
      >
        {navigationItemsElement}
      </ul>
    );
  }
}

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;
