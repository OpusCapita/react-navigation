import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuSearch.less';
import TitledButton from '@opuscapita/react-buttons/lib/TitledButton';
import themePropTypes from '../theme/theme-prop-types';
import opuscapitaDarkTheme from '../theme/opuscapita-dark';
import { spring, presets, Motion } from 'react-motion';

const searchSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/search.svg');


const propTypes = {
  theme: themePropTypes,
  title: Types.string,
  placeholder: Types.string,
  width: Types.number
};
const defaultProps = {
  theme: opuscapitaDarkTheme,
  title: '',
  placeholder: '',
  width: 320
};

const springPreset = { stiffness: 300, damping: 28 };

export default
class MenuSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      animationEnded: true
    };
  }


  handleSearchButtonClick = () => {
    this.setState({
      isOpened: !this.state.isOpened,
      animationEnded: false
    });
  }

  handleAnimationEnd = () => {
    this.setState({ animationEnded: true });
  }

  render() {
    const {
      theme,
      title,
      placeholder,
      width
    } = this.props;

    const {
      isOpened
    } = this.state;
    console.log('render', isOpened);

    return (
      <div className="oc-menu-search">
        <div className="oc-menu-search__search-button">
          <TitledButton
            svg={searchSVG}
            onClick={this.handleSearchButtonClick}
            bgColor={theme.bgColor}
            color={theme.color}
            title={title}
          />
        </div>
        <Motion
          defaultStyle={{ x: isOpened ? 1 : 0, y: isOpened ? width : 0 }}
          style={{
            x: isOpened ? spring(1, springPreset) : spring(0, springPreset),
            y: isOpened ? spring(width, springPreset) : spring(0, springPreset)
          }}
          onRest={this.handleAnimationEnd}
        >
          {interpolatedStyle => (
            <div
              className="oc-menu-search__container"
              style={{
                width: `${interpolatedStyle.y}px`
              }}
            >
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

MenuSearch.propTypes = propTypes;
MenuSearch.defaultProps = defaultProps;
