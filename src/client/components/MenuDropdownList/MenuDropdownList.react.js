import React, { Component, Children } from 'react';
import Types from 'prop-types';
import './MenuDropdownList.less';

const propTypes = {
  items: Types.arrayOf(Types.node)
};
const defaultProps = {
  items: []
};

export default
class MenuDropdownList extends Component {
  render() {
    const {
      items
    } = this.props;

    const itemsElement = Children.toArray(items).map((item, i) => {
      return (
        <li
          key={i}
          className="oc-menu-dropdown-list__item"
        >
          {item}
        </li>
      );
    });

    return (
      <ul className="oc-menu-dropdown-list">
        {itemsElement}
      </ul>
    );
  }
}

MenuDropdownList.propTypes = propTypes;
MenuDropdownList.defaultProps = defaultProps;
