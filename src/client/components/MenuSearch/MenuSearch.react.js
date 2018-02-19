/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuSearch.less';
import { SVG } from '@opuscapita/react-svg';

const searchSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/search.svg');


const propTypes = {
  onFocus: Types.func
};
const defaultProps = {
  onFocus: () => {}
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

    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleBodyKeyDown = this.handleBodyKeyDown.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
    document.body.addEventListener('keydown', this.handleBodyKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
    document.body.removeEventListener('keydown', this.handleBodyKeyDown);
  }

  handleSearchIconClick = () => {
    this.showAutocomplete();
    this.inputRef.focus();
  }

  handleInputFocus = (e) => {
    this.showAutocomplete();
    this.props.onFocus(e);
  }

  handleBodyClick = (event) => {
    let clickedOutside = !this.containerRef.contains(event.target);

    if (clickedOutside) {
      this.hideAutocomplete();
    }
  }

  handleBodyKeyDown = (event) => {
    if (event.which === 9 || event.which === 27) { // TAB or ESC key
      this.hideAutocomplete();
    }
  }

  handleAnimationEnd = () => {
    this.setState({ animationEnded: true });
  }

  showAutocomplete = () => {
    this.setState({ isOpened: true, animationEnded: false });
  }

  hideAutocomplete = () => {
    this.setState({ isOpened: false, animationEnded: false });
  }

  render() {
    const {
      children,
      onFocus, // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props;

    const {
      isOpened
    } = this.state;

    return (
      <div
        ref={ref => (this.containerRef = ref)}
        className="oc-menu-search"
        data-test="oc-menu-search"
      >
        <div
          className="oc-menu-search__container"
       >
          <div
            className="oc-menu-search__search-icon"
            onClick={this.handleSearchIconClick}
          >
            <SVG
              svg={searchSVG}
            />
          </div>
          <input
            ref={ref => (this.inputRef = ref)}
            className="oc-menu-search__input"
            data-test="oc-menu-search__input"
            onFocus={this.handleInputFocus}
            { ...restProps }
          />
        </div>
        {isOpened ? children : null}
      </div>
    );
  }
}

MenuSearch.propTypes = propTypes;
MenuSearch.defaultProps = defaultProps;
