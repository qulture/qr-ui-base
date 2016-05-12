import React, { PropTypes } from 'react';

function ButtonsGroup(props) {
  const { children } = props;

  return (
    <div className="qr-buttons-group">
      {children}
    </div>
  );
}

export default ButtonsGroup;
