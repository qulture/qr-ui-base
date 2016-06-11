import React, { PropTypes, Component } from 'react';
import { Grid, GridItem } from './../grid';

function SidebarListSection(props) {
  const { children, title, sideContent } = props;
  const titleDOMItem = !!title ? <h4 className="qr-sidebar-list-section-title detail-3-color">{title}</h4> : false;

  return (
    <section className="qr-sidebar-list-section">
      <Grid align="center">
        {titleDOMItem}
        <div className="medium-padding-right">{sideContent}</div>
      </Grid>
      <div className="qr-sidebar-list-section-content">
        {children}
      </div>
    </section>
  );
}

SidebarListSection.propTypes = {
  title: PropTypes.string,
  sideContent: PropTypes.node
};

export default SidebarListSection;
