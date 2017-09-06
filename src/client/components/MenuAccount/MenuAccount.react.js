import React, { Component } from 'react';
import Types from 'prop-types';
import './MenuAccount.less';
import MenuAccountIcon from '../MenuAccountIcon';
import TitledButton from '@opuscapita/react-buttons/lib/TitledButton';
import Button from '@opuscapita/react-buttons/lib/Button';

const logoutSVG = require('!!raw-loader!@opuscapita/svg-icons/lib/exit_to_app.svg');

const propTypes = {
  firstName: Types.string,
  lastName: Types.string,
  userName: Types.string,
  onLogout: Types.func,
  initials: Types.string,
  avatarSrc: Types.string,
  onAvatarClick: Types.func,
  actions: Types.arrayOf(Types.shape({
    label: Types.string,
    svg: Types.string,
    onClick: Types.func
  })),
  bottomElement: Types.node
};
const defaultProps = {
  firstName: '',
  lastName: '',
  userName: '',
  onLogout: () => {},
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
      onLogout,
      initials,
      avatarSrc,
      onAvatarClick,
      actions,
      bottomElement
    } = this.props;

    const actionsElement = actions.map((action, i) => (
      <Button
        key={i}
        className="oc-menu-account__action-button"
        color="#333"
        label={action.label}
        svg={action.svg}
        onClick={action.onClick}
        svgSize="20px"
        contentPosition="before"
      />
    ));

    const bottomRowElement = bottomElement ? (
      <div className="oc-menu-account__bottom-row">
        {bottomElement}
      </div>
    ) : null;

    return (
      <div className="oc-menu-account">
        <div className="oc-menu-account__top-row">
          <div className="oc-menu-account__account-icon-container">
            <MenuAccountIcon
              initials={initials}
              avatarSrc={avatarSrc}
              onClick={onAvatarClick}
              size={96}
            />
          </div>
          <div className="oc-menu-account__name-container">
            <div className="oc-menu-account__first-name">{firstName}</div>
            <div className="oc-menu-account__last-name">{lastName}</div>
            <div className="oc-menu-account__user-name">{userName}</div>
          </div>
          <div className="oc-menu-account__top-buttons-container">
            <TitledButton
              svg={logoutSVG}
              title="Logout"
              color="#333"
              onClick={onLogout}
            />
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