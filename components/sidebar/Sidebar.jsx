import React, { PropTypes } from 'react';

function Sidebar(props) {
  const { children, small, medium } = props;
  let className = 'qr-sidebar';
  if(!!small) className += ' small';
  if(!!medium) className += ' medium';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Sidebar.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default Sidebar;
