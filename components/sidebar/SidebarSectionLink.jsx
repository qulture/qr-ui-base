import React, { PropTypes, Component } from 'react';
import Icon from './../Icon';

function SidebarSectionLink(props) {
  const { children, link, title } = props;

  return (
    <a href={link} className="qr-sidebar-section">
      <div className="qr-sidebar-section-title">
        <h3>{title}</h3>
        <Icon type="angle-right" size="xx-large" />
      </div>
      <div className="qr-sidebar-section-content">
        {children}
      </div>
    </a>
  );
}

SidebarSectionLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default SidebarSectionLink;
