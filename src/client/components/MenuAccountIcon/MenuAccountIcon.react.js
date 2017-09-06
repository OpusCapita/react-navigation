import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuAccountIcon.less';
import themePropTypes from '../theme/theme-prop-types';
import opuscapitaDarkTheme from '../theme/opuscapita-dark';

const propTypes = {
  initials: Types.string,
  avatarSrc: Types.string,
  onClick: Types.func,
  size: Types.number,
  theme: themePropTypes
};
const defaultProps = {
  initials: '',
  avatarSrc: '',
  onClick: () => {},
  size: 128,
  theme: opuscapitaDarkTheme
};

export default
class MenuAccountIcon extends Component {
  render() {
    const {
      initials,
      avatarSrc,
      onClick,
      size,
      theme
    } = this.props;

    const style = ({
      backgroundImage: `url(${avatarSrc})`,
      width: size,
      height: size,
      color: theme.bgColor,
      fontSize: size / 2
    });

    const initialsElement = avatarSrc ? null : initials;

    return (
      <div
        className="oc-menu-account-icon"
        onClick={onClick}
        style={style}
      >
        {initialsElement}
      </div>
    );
  }
}

MenuAccountIcon.propTypes = propTypes;
MenuAccountIcon.defaultProps = defaultProps;
