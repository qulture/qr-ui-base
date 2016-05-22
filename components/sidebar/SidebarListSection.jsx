import React, { PropTypes, Component } from 'react';

function SidebarListSection(props) {
  const { children, title } = props;
  const titleDOMItem = !!title ? <h4 className="qr-sidebar-list-section-title detail-3-color">{title}</h4> : false;

  return (
    <section className="qr-sidebar-list-section">
      {titleDOMItem}
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
