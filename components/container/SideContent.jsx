import React, { PropTypes } from 'react';

function SideContent(props) {
  return (
    <div className="qr-side-content">
      {props.children}
    </div>
  );
}

export default SideContent;
