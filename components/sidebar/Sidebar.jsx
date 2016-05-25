import React, { PropTypes } from 'react';
import { ColorHelpers } from './../../helpers';

function Sidebar(props) {
  const { children, small, medium, color, borderRight, borderLeft } = props;
  let className = `qr-sidebar ${color}-bg-color`;
  if(!!small) className += ' small';
  if(!!medium) className += ' medium';
  if(!!borderRight) className += ' border-right';
  if(!!borderLeft) className += ' border-left';
  const style = ColorHelpers.generateStyleForColor('bg', color);

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

Sidebar.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  color: PropTypes.string,
  borderRight: PropTypes.bool,
  borderLeft: PropTypes.bool,
};

export default Sidebar;
