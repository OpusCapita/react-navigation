/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuDropdownGrid.less';
import SVG from '@opuscapita/react-svg/lib/SVG';

const propTypes = {
  activeItem: Types.number,
  items: Types.arrayOf(Types.shape({
    svg: Types.string,
    label: Types.string,
    href: Types.string
  }))
};
const defaultProps = {
  activeItem: null,
  items: []
};

export default
class MenuDropdownGrid extends Component {
  render() {
    const {
      activeItem,
      items
    } = this.props;

    const itemsElement = items.map((item, i) => {
      if (!item) {
        return (
          <div
            key={i}
            className={`oc-menu-dropdown-grid__item-container`}
            >
          </div>
        );
      }

      let { svg, label, href, ...restProps } = item;

      return (
        <a
          key={i}
          className={`oc-menu-dropdown-grid__item-container`}
          href={href || 'javascript: void(0)'}
          {...restProps}
        >
          <div
            className={`
              oc-menu-dropdown-grid__item
              ${activeItem === i ? 'oc-menu-dropdown-grid__item--active' : ''}
            `}
          >
            <div className="oc-menu-dropdown-grid__item-image">
              <SVG
                svg={svg || ''}
              />
            </div>
            <div className="oc-menu-dropdown-grid__item-label">
              {label || ''}
            </div>
          </div>
        </a>
      );
    });

    return (
      <div
        className="oc-menu-dropdown-grid"
      >
        <div className="oc-menu-dropdown-grid__items">
          {itemsElement}
        </div>
      </div>
    );
  }
}

MenuDropdownGrid.propTypes = propTypes;
MenuDropdownGrid.defaultProps = defaultProps;
