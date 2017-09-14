/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Types from 'prop-types';
import './Notification.less';
import SVG from '@opuscapita/react-svg/lib/SVG';

const propTypes = {
  svg: Types.string,
  message: Types.string,
  dateTime: Types.string,
  className: Types.string
};
const defaultProps = {
  svg: '',
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
      message,
      dateTime,
      className,
      ...restProps
    } = this.props;

    return (
      <div className={`oc-notification ${className}`} { ...restProps }>
        <div className={`oc-notification__icon`}>
          <SVG svg={svg} />
        </div>

        <div className={`oc-notification__message`}>
          {message}
        </div>

        <div className={`oc-notification__date-time`}>
          {dateTime}
        </div>
      </div>
    );
  }
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
