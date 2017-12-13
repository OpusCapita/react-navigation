/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Types from 'prop-types';
import './Notification.less';
import { SVG } from '@opuscapita/react-svg';

const propTypes = {
  svg: Types.string,
  svgClassName: Types.string,
  message: Types.node,
  dateTime: Types.string,
  className: Types.string
};
const defaultProps = {
  svg: '',
  svgClassName: '',
  message: '',
  dateTime: '',
  className: ''
};

export default
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      svg,
      svgClassName,
      message,
      dateTime,
      className,
      ...restProps
    } = this.props;

    return (
      <div className={`oc-notification ${className}`} { ...restProps }>
        <div className={`oc-notification__icon`}>
          <SVG svg={svg} className={svgClassName} />
        </div>

        <div className="oc-notification__text-contaniner">
          <div className={`oc-notification__message`}>
            {message}
          </div>

          <div className={`oc-notification__date-time`}>
            {dateTime}
          </div>
        </div>
      </div>
    );
  }
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
