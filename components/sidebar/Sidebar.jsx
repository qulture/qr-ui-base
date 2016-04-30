import React, { PropTypes } from 'react';

function Sidebar(props) {
  const { children, small } = props;
  let className = 'qr-sidebar';
  if(!!small) className += ' small';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Sidebar.propTypes = {
  small: PropTypes.bool
};

export default Sidebar;
