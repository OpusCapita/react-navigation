import React, { Component } from 'react';
import './MenuSearch.less';
import Types from 'prop-types';

const propTypes = {
  onChange: Types.func
};
const defaultProps = {
  onChange: () => {}
};

export default
class MenuSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="oc-menu-search">
      </div>
    );
  }
}

MenuSearch.propTypes = propTypes;
MenuSearch.defaultProps = defaultProps;
