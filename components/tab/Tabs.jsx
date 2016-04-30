import React, { PropTypes } from 'react';

function Tabs(props) {
  return (
    <div className="qr-tabs">
      {props.children}
    </div>
  );
}

export default Tabs;
