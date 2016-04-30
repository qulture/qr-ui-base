import React, { PropTypes } from 'react';

function Wizard(props) {
  return (
    <div className="qr-wizard">
      {props.children}
    </div>
  );
}

export default Wizard;
