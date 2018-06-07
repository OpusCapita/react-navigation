/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import Types from 'prop-types';
import chunk from 'lodash/chunk';
import flatten from 'lodash/flatten';
import './MenuDropdownGrid.less';
import { SVG } from '@opuscapita/react-svg';

const ITEM_SIZE = 110;
const ITEMS_PER_ROW = 3;

const propTypes = {
  activeItem: Types.number,
  items: Types.arrayOf(Types.shape({
    svg: Types.string,
    label: Types.string
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

    // Hide row if all items in the row are disabled
    const filteredItems = flatten(
      chunk(items, ITEMS_PER_ROW).filter((itemsChunk) => itemsChunk.some(item => !item.disabled))
    );

    const itemsElement = filteredItems.map((item, i) => {
      if (!item) {
        return (
          <div
            key={i}
            className={`oc-menu-dropdown-grid__item-container`}
          >
          </div>
        );
      }

      let { svg, label, disabled, href, onClick, ...restProps } = item;

      let itemElementChildren = (
        <div
          className={`
            oc-menu-dropdown-grid__item
            ${disabled ? 'oc-menu-dropdown-grid__item--disabled' : 'oc-menu-dropdown-grid__item--enabled' }
            ${(activeItem === i) && !disabled ? 'oc-menu-dropdown-grid__item--active' : ''}
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
      );

      let itemContainerProps = {
        key: i,
        className: `oc-menu-dropdown-grid__item-container`,
        "data-test": `oc-menu-dropdown-grid__item-container`,
        style: {
          width: `${ITEM_SIZE}px`,
          height: `${ITEM_SIZE}px`
        },
        children: itemElementChildren,
        ...((href && !disabled) ? { href } : {}),
        ...((onClick && !disabled) ? { onClick } : {}),
        ...restProps
      };

      let itemElement = (href && !disabled) ?
        React.createElement('a', itemContainerProps) :
        React.createElement('div', itemContainerProps);

      return itemElement;
    });

    return (
      <div
        className="oc-menu-dropdown-grid"
      >
        <div
          className="oc-menu-dropdown-grid__items"
          style={{
            width: `${ITEMS_PER_ROW * ITEM_SIZE}px`
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
