import React, { PropTypes } from 'react';

function PanelContentList(props) {
  const { children, fixedHeight } = props;
  let className = 'qr-panel-content-list';
  if(!!fixedHeight) className += ' fixed-height';
  console.log(fixedHeight, className);

  return (
    <ul className={className}>
      {children}
    </ul>
  );
}

PanelContentList.propTypes = {
  fixedHeight: PropTypes.bool
};

export default PanelContentList;
