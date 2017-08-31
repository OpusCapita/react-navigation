import Types from 'prop-types';

export default Types.shape({
  bgColor: Types.string,
  color: Types.string,
  menuIconNotificationBgColor: Types.string,
  menuIconNotificationColor: Types.string,
  navBgColor: Types.string,
  navColor: Types.string,
  navBorderColor: Types.string,
  navActiveBgColor: '#fff',
  navActiveColor: '#333',
  navActiveBorderColor: Types.string,
  isNavHoverOverlayDark: Types.bool,
  isMenuIconHoverOverlayDark: Types.bool
});
