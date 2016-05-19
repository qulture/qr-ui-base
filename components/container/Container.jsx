import React, { PropTypes } from 'react';
import { ColorHelpers } from './../../helpers';

function Container(props) {
  const { userColor, bgColor, children } = props;
  const className = `qr-container ${userColor}-user ${bgColor}-bg-color`;
  const style = ColorHelpers.generateStyleForColor('bg', bgColor);

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

Container.propTypes = {
  userColor: PropTypes.string,
  bgColor: PropTypes.string
};

export default Container;
