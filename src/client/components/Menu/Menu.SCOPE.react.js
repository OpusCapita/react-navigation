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

let icons = requireAll(require.context( '!!raw-loader!@opuscapita/svg-icons/lib', true, /.*\.svg$/));

@showroomScopeDecorator
export default
class MenuScope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons,
      themes: {
        dark: {
          bgColor: '#3b4a56',
          color: '#fff',
          navBgColor: '#67707c',
          navColor: '#fff',
          menuIconNotificationColor: '#fff',
          menuIconNotificationBgColor: '#ec6608',
          navBorderColor: 'transparent',
          navActiveBorderColor: '#ec6608',
          navOverlay: 'dark',
          isNavHoverOverlayDark: true,
          isMenuIconHoverOverlayDark: false
        },
        light: {
          bgColor: '#fff',
          color: '#333',
          navBgColor: 'transparent',
          navColor: '#333',
          menuIconNotificationColor: '#fff',
          menuIconNotificationBgColor: '#ec6608',
          navBorderColor: '#e5e5e5',
          navActiveBorderColor: '#ec6608',
          isNavHoverOverlayDark: false,
          isMenuIconHoverOverlayDark: true
        }
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
