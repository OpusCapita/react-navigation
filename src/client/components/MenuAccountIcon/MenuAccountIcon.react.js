import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuAccountIcon.less';

const propTypes = {
  initials: Types.string,
  avatarSrc: Types.string,
  onClick: Types.func
};
const defaultProps = {
  initials: '',
  avatarSrc: '',
  onClick: () => {}
};

export default
class MenuAccountIcon extends Component {
  render() {
    const {
      initials,
      avatarSrc,
      onClick,
      style
    } = this.props;

    const initialsElement = avatarSrc ? null : initials;

    return (
      <div
        className="oc-menu-account-icon"
        onClick={onClick}
        style={{ ...style, backgroundImage: `url(${avatarSrc})` }}
      >
        {initialsElement}
      </div>
    );
  }
}

MenuAccountIcon.propTypes = propTypes;
MenuAccountIcon.defaultProps = defaultProps;
