/*
   What is a SCOPE file. See documentation here:
   https://github.com/OpusCapita/react-showroom-client/blob/master/docs/scope-component.md
*/

import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import MenuIcon from '../MenuIcon';

window.MenuIcon = MenuIcon;

function requireAll(requireContext) {
  return requireContext.keys().map(key => ({
    name: key.replace(/(\.svg$|^\.\/)/gi, ''),
    svg: requireContext(key)
  }));
}

let icons = requireAll(require.context('!!raw-loader!@opuscapita/svg-icons/lib', true, /.*\.svg$/));

@showroomScopeDecorator
export default
class MenuIconsBarScope extends Component {
  constructor(props) {
    super(props);
    this.state = { icons };
  }

  getIcon(name) {
    return this.state.icons.filter(icon => icon.name === name)[0].svg;
  }

  render() {
    return (
      <div>
        {this._renderChildren()}
      </div>
    );
  }
}

MenuIconsBarScope.contextTypes = {
  i18n: PropTypes.object
};
MenuIconsBarScope.childContextTypes = {
  i18n: PropTypes.object
};
