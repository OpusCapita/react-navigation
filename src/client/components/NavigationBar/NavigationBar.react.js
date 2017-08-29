import React, { Component } from 'react';
import Types from 'prop-types';
import './NavigationBar.less';
import SVG from '@opuscapita/react-svg/lib/SVG';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

const propTypes = {
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
  navigationItems: []
};

export default
class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderClickableElement = (item, className) => {
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
      <div className="oc-navigation-bar__clickable-element-container">
        {clickableElement}
        {dropdownIcon}
      </div>
    );
  }

  renderTopLevelItem = (navigationItem, key) => {
    console.log('navItem', navigationItem);

    let clickableItem = this.renderClickableElement(navigationItem);


    return (
      <li key={key} className="oc-navigation-bar__top-level-item">
        {clickableItem}
      </li>
    );
  }

  renderSubLevelItem = (subItem, key) => {
    console.log('subItem', subItem);
  }

  render() {
    let {
      navigationItems
    } = this.props;

    const navigationItemsElement = navigationItems.map(
      (navigationItem, i) => this.renderTopLevelItem(navigationItem, i)
    );

    return (
      <ul className="oc-navigation-bar">
        {navigationItemsElement}
      </ul>
    );
  }
}

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;
