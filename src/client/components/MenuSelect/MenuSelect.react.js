/* eslint-disable react/jsx-pascal-case */
import React, { PureComponent } from 'react';
import Types from 'prop-types';
import './MenuSelect.less';
import SVG from '@opuscapita/react-svg/lib/SVG';
const dropdownSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/arrow_drop_down.svg');

const propTypes = {
  className: Types.string
};
const defaultProps = {
  className: Types.string
};

export default
class MenuSelect extends PureComponent {
  render() {
    const { className, ...restProps } = this.props;

    return (
      <div className={`oc-menu-select ${className || ''}`}>
        <div className="oc-menu-select__dropdown-icon">
          <SVG
            svg={dropdownSVG}
            style={{ fill: '#333' }}
          />
        </div>
        <select className="oc-menu-select__select" {...restProps}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

MenuSelect.propTypes = propTypes;
MenuSelect.defaultProps = defaultProps;
