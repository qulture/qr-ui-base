import React, { PropTypes, Component } from 'react';

function SidebarSection(props) {
  const { children, link, title } = props;
  const titleDOMItem = !!title ? <h3>{title}</h3> : '';

  return (
    <section className="qr-sidebar-section">
      <div className="qr-sidebar-section-title">
        {titleDOMItem}
      </div>
      <div className="qr-sidebar-section-content">
        {children}
      </div>
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string
};

export default SidebarSection;
