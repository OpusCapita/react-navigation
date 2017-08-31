import React, { Component, Children } from 'react';
import Types from 'prop-types';
import './MenuIconsBar.less';


const propTypes = {
  theme: Types.shape({
    color: Types.string,
    menuIconNotificationColor: Types.string
  })
};
const defaultProps = {
  theme: {
    color: '#333',
    menuIconNotificationColor: '#dd2515'
  }
};

export default
class MenuIconsBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { children, theme } = this.props;

    const childrenElement = Children.toArray(children).map((child, i) => (
      <div key={i} className="oc-menu-icons-bar__child">
        {({ ...child, props: { ...child.props, theme } })}
      </div>
    ));

    return (
      <div className="oc-menu-icons-bar">
        {childrenElement}
      </div>
    );
  }
}

MenuIconsBar.propTypes = propTypes;
MenuIconsBar.defaultProps = defaultProps;
