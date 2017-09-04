/*
   What is a SCOPE file. See documentation here:
   https://github.com/OpusCapita/react-showroom-client/blob/master/docs/scope-component.md
*/

import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import opuscapitaDarkTheme from '../theme/opuscapita-dark';
import opuscapitaLightTheme from '../theme/opuscapita-light';
import MenuIcon from '../MenuIcon';
import MenuDropdownGrid from '../MenuDropdownGrid';

window.MenuIcon = MenuIcon;
window.MenuDropdownGrid = MenuDropdownGrid;

function requireAll(requireContext) {
  return requireContext.keys().map(key => ({
    name: key.replace(/(\.svg$|^\.\/)/gi, ''),
    svg: requireContext(key)
  }));
}

let icons = requireAll(require.context( '!!raw-loader!@opuscapita/svg-icons/lib', true, /.*\.svg$/));

@showroomScopeDecorator
export default
class MenuScope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons,
      themes: {
        opuscapitaDark: opuscapitaDarkTheme,
        opuscapitaLight: opuscapitaLightTheme
      },
      logos: {
        dark: 'https://develop.businessnetwork.opuscapita.com/invoice/static/img/oc-logo-white.svg',
        light: 'http://test.jcatalog.com/oc-logo-rgb.svg'
      }
    };
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

MenuScope.contextTypes = {
  i18n: PropTypes.object
};
MenuScope.childContextTypes = {
  i18n: PropTypes.object
};
