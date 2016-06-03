import React, { PropTypes } from 'react';

function PanelHeader(props) {
  const { children, grid } = props;
  let className = 'qr-panel-header';
  if(!!grid) className += ' qr-grid';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

PanelHeader.propTypes = {
  grid: PropTypes.bool
}

export default PanelHeader;
