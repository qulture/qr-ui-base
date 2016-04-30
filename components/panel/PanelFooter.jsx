import React, { PropTypes } from 'react';

function PanelFooter(props) {
  const { children } = props;

  return (
    <div className="qr-panel-footer">
      {children}
    </div>
  );
}

export default PanelFooter;
