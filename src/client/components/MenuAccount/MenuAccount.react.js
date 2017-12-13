import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuAccount.less';
import MenuAccountIcon from '../MenuAccountIcon';
import { Button } from '@opuscapita/react-buttons';

const propTypes = {
  firstName: Types.string,
  lastName: Types.string,
  userName: Types.string,
  initials: Types.string,
  avatarSrc: Types.string,
  onAvatarClick: Types.func,
  actions: Types.oneOf([
    Types.arrayOf(Types.shape({
      label: Types.string,
      svg: Types.string,
      onClick: Types.func
    })),
    Types.node
  ]),
  bottomElement: Types.node
};
const defaultProps = {
  firstName: '',
  lastName: '',
  userName: '',
  initials: '',
  avatarSrc: '',
  onAvatarClick: '',
  actions: [],
  bottomElement: null
};

export default
class MenuAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      firstName,
      lastName,
      userName,
      initials,
      avatarSrc,
      onAvatarClick,
      actions,
      bottomElement
    } = this.props;

    const actionsElement = actions.map((action, i) => {
      const isReactNode = React.isValidElement(action);

      if (isReactNode) {
        return action;
      }

      let { label, svg, onClick, ...restProps } = action;

      return (
        <Button
          key={i}
          className="oc-menu-account__action-button"
          label={label}
          svg={svg}
          onClick={e => onClick(e)}
          contentPosition="before"
          data-test="oc-menu-account__action-button"
          {...restProps}
        />
      );
    });

    const bottomRowElement = (
      <div className="oc-menu-account__bottom-row">
        {bottomElement}
      </div>
    );

    return (
      <div className="oc-menu-account" data-test="oc-menu-account">
        <div className="oc-menu-account__top-row">
          <div className="oc-menu-account__account-icon-container">
            <MenuAccountIcon
              initials={initials}
              avatarSrc={avatarSrc}
              onClick={onAvatarClick}
            />
          </div>
          <div className="oc-menu-account__name-container">
            <div id="oc-menu-account__full-name" className="oc-menu-account__full-name">{firstName} {lastName}</div>
            <div id="oc-menu-account__user-name" className="oc-menu-account__user-name">{userName}</div>
          </div>
        </div>

        <div className="oc-menu-account__middle-row">
          <div className="oc-menu-account__actions-container">
            {actionsElement}
          </div>
        </div>
        {bottomRowElement}
      </div>
    );
  }
}

MenuAccount.propTypes = propTypes;
MenuAccount.defaultProps = defaultProps;
