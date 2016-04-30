import React, { PropTypes } from 'react';

function Panel(props) {
  const { children, transparent } = props;
  let className = 'qr-panel';
  if(!!transparent) className += ' transparent';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Panel.propTypes = {
  transparent: PropTypes.bool
}

export default Panel;
