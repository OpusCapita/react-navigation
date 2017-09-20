/* eslint-disable react/jsx-pascal-case */
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
  })),
  itemSize: Types.number,
  itemsPerRow: Types.number,
  maxRows: Types.number
};
const defaultProps = {
  activeItem: null,
  items: [],
  itemSize: 110,
  itemsPerRow: 3,
  maxRows: 2
};

export default
class MenuDropdownGrid extends Component {
  render() {
    const {
      activeItem,
      items,
      itemSize,
      itemsPerRow,
      maxRows
    } = this.props;

    const itemsElement = items.map((item, i) => {
      return (
        <a
          key={i}
          className={`oc-menu-dropdown-grid__item-container`}
          href={item.href || '#'}
          style={{
            width: `${itemSize}px`,
            height: `${itemSize}px`
          }}
        >
          <div
            className={`
              oc-menu-dropdown-grid__item
              ${activeItem === i ? 'oc-menu-dropdown-grid__item--active' : ''}
            `}
          >
            <div className="oc-menu-dropdown-grid__item-image">
              <SVG
                svg={item.svg || ''}
                style={{
                  width: '32px',
                  height: '32px',
                  fill: '#333'
                }}
              />
            </div>
            <div className="oc-menu-dropdown-grid__item-label">
              {item.label || ''}
            </div>
          </div>
        </a>
      );
    });

    return (
      <div
        className="oc-menu-dropdown-grid"
      >
        <div
          className="oc-menu-dropdown-grid__items"
          style={{
            height: (items.length > itemsPerRow) ? itemSize * maxRows : itemSize,
            width: (items.length > itemsPerRow) ? (itemSize * itemsPerRow) : (itemSize * items.length)
          }}
        >
          {itemsElement}
        </div>
      </div>
    );
  }
}

MenuDropdownGrid.propTypes = propTypes;
MenuDropdownGrid.defaultProps = defaultProps;
