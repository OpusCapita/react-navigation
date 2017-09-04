import React, { Component, Children } from 'react';
import Types from 'prop-types';
import './MenuDropdownGrid.less';
import SVG from '@opuscapita/react-svg/lib/SVG';

const propTypes = {
  activeItem: 0,
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

    const itemsElement = items.map((item, i) => {
      return (
        <div
          key={i}
          className={`oc-menu-dropdown-grid__item-container`}
        >
          <div
            className={`
              oc-menu-dropdown-grid__item
              ${activeItem === i ? 'oc-menu-dropdown-grid__item--active' : ''}
            `}
          >
            <div className="oc-menu-dropdown-grid__item-image">
              <SVG svg={item.svg || ''} style={{ width: '24px', height: '24px', fill: '#333' }} />
            </div>
            <div className="oc-menu-dropdown-grid__item-label">
              {item.label || ''}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="oc-menu-dropdown-grid">
        {itemsElement}
      </div>
    );
  }
}

MenuDropdownGrid.propTypes = propTypes;
MenuDropdownGrid.defaultProps = defaultProps;
