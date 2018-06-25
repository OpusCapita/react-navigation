/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Types from 'prop-types';
import './NavigationBar.less';
import { SVG } from '@opuscapita/react-svg';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

const propTypes = {
  navigationItems: Types.arrayOf(Types.shape({
    children: Types.node,
    href: Types.string,
    subItems: Types.arrayOf(Types.shape({
      children: Types.node,
      href: Types.string,
      onClick: Types.func
    }))
  })),
  vertical: Types.bool,
  onNavigation: Types.func
};
const defaultProps = {
  navigationItems: [],
  vertical: false,
  onNavigation: () => {}
};

export default
class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedItem: null
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
    this.setState({ openedItem: key });
  }

  hideTopLevelItem = () => {
    this.setState({ openedItem: null });
  }

  handleTopLevelItemClick = (key) => {
    if (this.state.openedItem === key) {
      this.hideTopLevelItem();
    } else {
      this.showTopLevelItem(key);
    }
  }

  renderClickableElement = (item, key, className) => {
    const {
      href,
      active, // eslint-disable-line no-unused-vars
      children,
      subItems, // eslint-disable-line no-unused-vars
      navigatable,
      onClick,
      ...restProps
    } = item;

    let isOpened = this.state.openedItem === key;

    const { vertical, onNavigation } = this.props;

    let dropdownIcon = item.subItems ? (
      <div
        className={`
          oc-navigation-bar__dropdown-icon
          ${(vertical && isOpened) ? 'oc-navigation-bar__dropdown-icon--dropup' : ''}
        `}
      >
        <SVG
          svg={dropdownSVG}
        />
      </div>
    ) : null;

    let clickableElement = null;

    if (href) {
      clickableElement = (
        <a
          href={href}
          onClick={() => {
            if (onClick) {
              onClick();
            }

            if (navigatable) {
              onNavigation();
            }
          }}
          className={`
            oc-navigation-bar__clickable-element
            ${dropdownIcon ? 'oc-navigation-bar__clickable-element--with-dropdown' : ''}
          `}
          {...restProps}
        >
          {children}
        </a>
      );
    } else {
      clickableElement = (
        <div
          href={href}
          onClick={() => {
            if (onClick) {
              onClick();
            }

            if (navigatable) {
              onNavigation();
            }
          }}
          className={`
            oc-navigation-bar__clickable-element
            ${dropdownIcon ? 'oc-navigation-bar__clickable-element--with-dropdown' : ''}
          `}
        >
          {children}
        </div>
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
    const isActive = !!navigationItem.active;

    let subItems = null;
    let isOpened = this.state.openedItem === key;
    let { vertical } = this.props;

    if (navigationItem.subItems && isOpened) {
      subItems = (
        <ul
          className={`
            oc-navigation-bar__sub-items-container
            ${vertical ? 'oc-navigation-bar__sub-items-container--vertical' : ''}
          `}
        >
          {navigationItem.subItems.map((subItem, i) => this.renderSubLevelItem(subItem, i))}
        </ul>
      );
    }

    return (
      <li
        key={key}
        data-test="oc-navigation-bar__top-level-item"
        className={`
          oc-navigation-bar__top-level-item
          ${isActive ? 'oc-navigation-bar__top-level-item--active' : ''}
          ${isOpened ? 'oc-navigation-bar__top-level-item--opened' : ''}
          ${vertical ? 'oc-navigation-bar__top-level-item--vertical' : ''}
          ${'oc-navigation-bar__top-level-item--light-overlay'}
        `}
        onClick={() => this.handleTopLevelItemClick(key)}
      >
        <div
          className={`
            oc-navigation-bar__top-level-clickable-item
            ${vertical ? 'oc-navigation-bar__top-level-clickable-item--vertical' : ''}
            ${isActive ? 'oc-navigation-bar__top-level-clickable-item--active' : '' }`
          }
        >
          {clickableItem}
        </div>
        {subItems}
      </li>
    );
  }

  renderSubLevelItem = (subItem, key) => {
    return (
      <li
        key={key}
        className="oc-navigation-bar__sub-item"
        data-test="oc-navigation-bar__sub-item"
      >
        {this.renderClickableElement(subItem, key)}
      </li>
    );
  }

  render() {
    let {
      navigationItems,
      vertical
    } = this.props;

    const navigationItemsElement = navigationItems.map(
      (navigationItem, i) => this.renderTopLevelItem(navigationItem, i)
    );

    return (
      <ul
        ref={ref => (this.containerRef = ref)}
        className={`oc-navigation-bar ${vertical ? 'oc-navigation-bar--vertical' : ''}`}
        data-test="oc-navigation-bar"
      >
        {navigationItemsElement}
      </ul>
    );
  }
}

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;
