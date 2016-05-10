import React, { PropTypes } from 'react';

function ModalContent(props) {
  const { children, noPaddingRight } = props;
  let className = 'qr-modal-content';
  if(!!noPaddingRight) className += ' no-padding-right';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

ModalContent.propTypes = {
  noPaddingRight: PropTypes.bool
}

export default ModalContent;
