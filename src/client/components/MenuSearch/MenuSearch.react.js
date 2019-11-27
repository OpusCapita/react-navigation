/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Types from 'prop-types';
import { SVG } from '@opuscapita/react-svg';
import MenuIcon from '../MenuIcon';

const searchSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/search.svg');


const propTypes = {
  isMinimized: Types.bool,
  onFocus: Types.func
};
const defaultProps = {
  isMinimized: false,
  onFocus: () => {}
};

export default
class MenuSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
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
    (this.inputRef && this.inputRef).focus();
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

  showAutocomplete = () => {
    this.setState({ isOpened: true });
  }

  hideAutocomplete = () => {
    this.setState({ isOpened: false });
  }

  render() {
    const {
      children,
      isMinimized,
      onFocus, // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props;

    const {
      isOpened
    } = this.state;

    if (isMinimized) {
      return (
        <div
          ref={ref => (this.containerRef = ref)}
          className="oc-menu-search"
          data-test="oc-menu-search"
        >
          <div
            className="oc-menu-search__search-icon"
            onClick={this.handleSearchIconClick}
          >
            <MenuIcon
              onClick={() => console.log('click!')}
              svg={searchSVG}
              title="My lists"
            />
            {isOpened ? children : null}
          </div>
        </div>
      );
    }

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
