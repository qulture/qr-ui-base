import React, { PropTypes } from 'react';

function Panel(props) {
  const { children, transparent, noMarginBottom } = props;
  let className = 'qr-panel';
  if(!!transparent) className += ' transparent';
  if(!!noMarginBottom) className += ' no-margin-bottom';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Panel.propTypes = {
  transparent: PropTypes.bool,
  noMarginBottom: PropTypes.bool
}

export default Panel;
