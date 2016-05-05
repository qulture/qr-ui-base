import React, { PropTypes } from 'react';
import Icon from './../Icon';

function SidebarReturnLink(props) {
  const { children, link, action } = props;

  return (
    <a href={link} onClick={action} className="qr-sidebar-return-link">
      <Icon type="angle-left" size="x-large" color="detail-2" />
      <div className="qr-sidebar-return-link-text">{children}</div>
    </a>
  );
}

SidebarReturnLink.propTypes = {
  link: PropTypes.string,
  action: PropTypes.func
};

export default SidebarReturnLink;
