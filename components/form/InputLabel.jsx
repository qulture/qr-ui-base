import React from 'react';

function InputLabel(props) {
  const { children } = props;

  return (
    <label className="qr-input-label">{children}</label>
  );
}

export default InputLabel;
