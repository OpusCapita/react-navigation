/*
   What is a SCOPE file. See documentation here:
   https://github.com/OpusCapita/react-showroom-client/blob/master/docs/scope-component.md
*/

import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';

import MenuLogo from '../MenuLogo';

window.MenuLogo = MenuLogo;

@showroomScopeDecorator
export default
class MenuScope extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
