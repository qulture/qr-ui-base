import React, { PropTypes } from 'react';

function Sidebar(props) {
  const { children, small, medium, borderRight, borderLeft } = props;
  let className = 'qr-sidebar';
  if(!!small) className += ' small';
  if(!!medium) className += ' medium';
  if(!!borderRight) className += ' border-right';
  if(!!borderLeft) className += ' border-left';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Sidebar.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderLeft: PropTypes.bool,
};

export default Sidebar;
