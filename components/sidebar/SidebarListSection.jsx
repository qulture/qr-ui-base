import React, { PropTypes, Component } from 'react';

function SidebarListSection(props) {
  const { children, title } = props;

  return (
    <section className="qr-sidebar-list-section">
      <h4 className="qr-sidebar-list-section-title detail-3-color">
        {title}
      </h4>
      <div className="qr-sidebar-list-section-content">
        {children}
      </div>
    </section>
  );
}

SidebarListSection.propTypes = {
  title: PropTypes.string,
};

export default SidebarListSection;
