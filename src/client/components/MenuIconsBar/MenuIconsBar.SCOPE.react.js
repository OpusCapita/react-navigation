/*
   What is a SCOPE file. See documentation here:
   https://github.com/OpusCapita/react-showroom-client/blob/master/docs/scope-component.md
*/

import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';

@showroomScopeDecorator
export default
class MenuIconsBarScope extends Component {
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

MenuIconsBarScope.contextTypes = {
  i18n: PropTypes.object
};
MenuIconsBarScope.childContextTypes = {
  i18n: PropTypes.object
};
