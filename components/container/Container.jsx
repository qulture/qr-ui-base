import React, { PropTypes } from 'react';

function Container(props) {
  const { userColor, bgColor, children } = props;
  const className = `qr-container ${userColor}-user ${bgColor}-bg-color`;

  return (
    <div className={className}>
      {children}
    </div>
  )
}

Container.propTypes = {
  userColor: PropTypes.string,
  bgColor: PropTypes.string
};

export default Container;
