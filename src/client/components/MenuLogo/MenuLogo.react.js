import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuLogo.less';

const propTypes = {
  logoSrc: Types.string,
  logoHref: Types.string,
  logoTitle: Types.string,
  labelText: Types.string,
  labelLinkText: Types.string,
  labelLinkHref: Types.string,
  showLabel: Types.bool
};
const defaultProps = {
  logoSrc: '',
  logoTitle: '',
  logoHref: '#',
  labelText: '',
  labelLinkText: '',
  labelLinkHref: '#',
  showLabel: true
};

export default
class MenuLogo extends Component {
  render() {
    const {
      logoSrc,
      logoHref,
      logoTitle,
      labelText,
      labelLinkText,
      labelLinkHref,
      showLabel
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
        <div
          className={`
            oc-menu-logo__label
            ${showLabel ? '' : 'oc-menu-logo__label--hidden' }
          `}
        >
          <span className="oc-menu-logo__label-text">
            {labelText}
          </span>
          <a
            className="oc-menu-logo__label-link"
            href={labelLinkHref}
          >
            {labelLinkText}
          </a>
        </div>
      </div>
    );
  }
}

MenuLogo.propTypes = propTypes;
MenuLogo.defaultProps = defaultProps;
