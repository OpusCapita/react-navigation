import React, { PureComponent } from 'react';
import Types from 'prop-types';
import './MenuLogo.less';

const propTypes = {
  logoSrc: Types.string,
  logoHref: Types.string,
  logoTitle: Types.string,
  labelText: Types.string,
  labelLinkText: Types.string,
  labelLinkHref: Types.string
};
const defaultProps = {
  logoSrc: 'https://patrickcoombe.com/wp-content/uploads/2015/09/new-google-logo-2015-1024x427.png',
  logoTitle: '',
  logoHref: 'google.com',
  labelText: '',
  labelLinkText: ''
};

export default
class MenuLogo extends PureComponent {
  render() {
    const {
      logoSrc,
      logoHref,
      logoTitle,
      labelText,
      labelLinkText,
      labelLinkHref
    } = this.props;

    return (
      <div className="oc-menu-logo">
        <div className="oc-menu-logo__image-container">
          <a
            target="_blank"
            className="oc-menu-logo__image-link"
            href={logoHref}
          >
            <img
              className="oc-menu-logo__image"
              title={logoTitle}
              src={logoSrc}
            />
          </a>
        </div>
        <div className="oc-menu-logo__label">
          <span className="oc-menu-logo__label-text">
            {labelText}
          </span>&nbsp;
          <a
            target="_blank"
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
