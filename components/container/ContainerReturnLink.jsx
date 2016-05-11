import React, { PropTypes } from 'react';
import Icon from './../Icon';

function ContainerReturnLink(props) {
  const { link, action } = props;
  return <Icon className="qr-container-title-return-link" color="detail-2" size="xx-large" type="angle-left" link={link} action={action} />
}

ContainerReturnLink.propTypes = {
  link: PropTypes.string,
  action: PropTypes.func
}

export default ContainerReturnLink;
