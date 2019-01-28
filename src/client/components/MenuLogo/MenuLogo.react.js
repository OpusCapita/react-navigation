import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuLogo.less';

const propTypes = {
  logoSrc: Types.string,
  logoHref: Types.string,
  logoTitle: Types.string
};
const defaultProps = {
  logoSrc: '',
  logoTitle: '',
  logoHref: '#'
};

export default
class MenuLogo extends Component {
  render() {
    const {
      logoSrc,
      logoHref,
      logoTitle
    } = this.props;

    return (
      <div className="oc-menu-logo" data-test="oc-menu-logo">
        <a
          className="oc-menu-logo__link"
          href={logoHref}
        >
          <img
            className="oc-menu-logo__image"
            title={logoTitle}
            src={logoSrc}
          />
        </a>
      </div>
    );
  }
}

MenuLogo.propTypes = propTypes;
MenuLogo.defaultProps = defaultProps;
