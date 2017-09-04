import React, { Component, Children } from 'react';
import Types from 'prop-types';
import './MenuDropdownGrid.less';
import SVG from '@opuscapita/react-svg/lib/SVG';
import themePropTypes from '../theme/theme-prop-types';
import opuscapitaLightTheme from '../theme/opuscapita-light';

const propTypes = {
  activeItem: Types.number,
  items: Types.arrayOf(Types.shape({
    svg: Types.string,
    label: Types.string
  })),
  itemSize: Types.number,
  itemsPerRow: Types.number,
  theme: themePropTypes
};
const defaultProps = {
  activeItem: null,
  items: [],
  itemSize: 80,
  itemsPerRow: 3,
  theme: opuscapitaLightTheme
};

export default
class MenuDropdownGrid extends Component {
  render() {
    const {
      activeItem,
      items,
      itemSize,
      itemsPerRow,
      theme
    } = this.props;

    const itemsElement = items.map((item, i) => {
      return (
        <div
          key={i}
          className={`oc-menu-dropdown-grid__item-container`}
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
            style={{
              backgroundColor: theme.menuGridItemBgColor,
              color: theme.menuGridItemColor
            }}
          >
            <div className="oc-menu-dropdown-grid__item-image">
              <SVG
                svg={item.svg || ''}
                style={{
                  width: '24px',
                  height: '24px',
                  fill: theme.menuGridItemColor
                }}
              />
            </div>
            <div className="oc-menu-dropdown-grid__item-label">
              {item.label || ''}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div
        className="oc-menu-dropdown-grid"
        style={{
          width: (items.length > itemsPerRow) ? (itemSize * itemsPerRow) : (itemSize * items.length)
        }}
      >
        {itemsElement}
      </div>
    );
  }
}

MenuDropdownGrid.propTypes = propTypes;
MenuDropdownGrid.defaultProps = defaultProps;
