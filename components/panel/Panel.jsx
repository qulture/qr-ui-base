import React, { PropTypes } from 'react';

function Panel(props) {
  const {children} = props;
  const className = 'qr-panel';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Panel;
