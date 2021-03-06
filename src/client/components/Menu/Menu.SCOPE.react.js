/*
   What is a SCOPE file. See documentation here:
   https://github.com/OpusCapita/react-showroom-client/blob/master/docs/scope-component.md
*/
// import '@opuscapita/styles/dist/npm/index.css';
import React, { Component } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import MenuIcon from '../MenuIcon';
import MenuDropdownGrid from '../MenuDropdownGrid';
import MenuDropdownList from '../MenuDropdownList';
import MenuSearch from '../MenuSearch';
import MenuAccount from '../MenuAccount';
import MenuSelect from '../MenuSelect';
import Notification from '../Notification';
import Notifications from '../Notifications';
import { SVG } from '@opuscapita/react-svg';
let circleSVG = require('!!raw-loader!./circle.svg');

window.MenuIcon = MenuIcon;
window.MenuDropdownGrid = MenuDropdownGrid;
window.MenuDropdownList = MenuDropdownList;
window.SVG = SVG;
window.MenuSearch = MenuSearch;
window.MenuAccount = MenuAccount;
window.MenuSelect = MenuSelect;
window.Notifications = Notifications;
window.Notification = Notification;

function requireAll(requireContext) {
  return requireContext.keys().map(key => ({
    name: key.replace(/(\.svg$|^\.\/)/gi, ''),
    svg: requireContext(key)
  }));
}

let icons = requireAll(require.context('!!raw-loader!@opuscapita/svg-icons/lib', true, /.*\.svg$/));

@showroomScopeDecorator
export default
class MenuScope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [...icons, { name: 'circle', svg: circleSVG }],
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
