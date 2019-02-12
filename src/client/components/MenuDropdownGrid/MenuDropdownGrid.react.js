/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuDropdownGrid.less';
import { SVG } from '@opuscapita/react-svg';

const ITEM_SIZE = 110;
const ITEMS_PER_ROW = 3;

const propTypes = {
  items: Types.arrayOf(Types.shape({
    svg: Types.string,
    label: Types.string
  })),
  setIsHidden: Types.func
};
const defaultProps = {
  items: [],
  setIsHidden: () => {}
};

export default
class MenuDropdownGrid extends Component {

  componentDidMount() {
    if (this.filterItems().length <= 1) {
      this.props.setIsHidden(true)
    }
  }

  filterItems = () => {
    return this.props.items.filter(item => item && !item.disabled && (item.href || item.onClick))
  }

  render() {
    const itemsElement = this.filterItems().map((item, i) => {
      let itemContainerStyle = {
        width: `${ITEM_SIZE}px`,
        height: `${ITEM_SIZE}px`
      };

      let { svg, label, active, href, onClick, ...restProps } = item;

      let itemElementChildren = (
        <div
          className={`
            oc-menu-dropdown-grid__item oc-menu-dropdown-grid__item--enabled
            ${active ? 'oc-menu-dropdown-grid__item--active' : ''}
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
        style: itemContainerStyle,
        children: itemElementChildren,
        ...((href) ? { href } : {}),
        ...((onClick) ? { onClick } : {}),
        ...restProps
      };

      return React.createElement('a', itemContainerProps);
    });

    return itemsElement.length > 1 ? (
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
    ) : null;
  }
}

MenuDropdownGrid.propTypes = propTypes;
MenuDropdownGrid.defaultProps = defaultProps;
