import React, { PureComponent } from 'react';
import './MenuSelect.less';
import SVG from '@opuscapita/react-svg/lib/SVG';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

export default
class MenuSelect extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={`oc-menu-select ${className || ''}`}>
        <div className="oc-menu-select__dropdown-icon">
          <SVG
            svg={dropdownSVG}
            style={{ fill: '#333' }}
          />
        </div>
        <select className="oc-menu-select__select">
          {this.props.children}
        </select>
      </div>
    );
  }
}
