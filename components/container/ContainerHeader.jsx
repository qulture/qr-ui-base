import React, { PropTypes } from 'react';
import Icon from './../Icon';

function ContainerHeader(props) {
  const { children, returnLink, large, fullWidth, noPaddingLeft } = props;
  const returnDOMItem = !!returnLink ? <Icon className="qr-container-title-return-link" color="detail-2" size="xx-large" type="angle-left" link={returnLink} /> : '';
  let className = 'qr-container-title';
  if(!!fullWidth) className += ' full-width';
  if(!!large) className += ' large';
  if(!!noPaddingLeft) className += ' no-padding-left';

  return (
    <div className={className}>
      {returnDOMItem}
      {children}
    </div>
  );
}

ContainerHeader.propTypes = {
  returnLink: PropTypes.string,
  large: PropTypes.bool,
  fullWidth: PropTypes.bool,
  noPaddingLeft: PropTypes.bool,
}

export default ContainerHeader;
