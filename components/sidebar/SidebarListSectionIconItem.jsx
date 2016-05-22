import React, { PropTypes, Component } from 'react';
import { Grid, GridItem } from './../grid';
import SidebarListSectionItem from './SidebarListSectionItem';
import Icon from './../Icon';
import Text from './../Text';

function SidebarListSectionIconItem(props) {
  const { children, sideContent, link, action, active, icon, iconSize, color } = props;

  return (
    <SidebarListSectionItem active={active} link={link} action={action} sideContent={sideContent}>
      <Grid align="center">
        <GridItem>
          <Icon type={icon} color={color} size={iconSize} />
        </GridItem>
        <GridItem grow={1}>
          <Text color={color}>{children}</Text>
        </GridItem>
      </Grid>
    </SidebarListSectionItem>
  );
}

SidebarListSectionIconItem.propTypes = {
  link: PropTypes.string,
  action: PropTypes.func,
  active: PropTypes.bool,
  sideContent: PropTypes.node,
  icon: PropTypes.string,
  color: PropTypes.string,
  iconSize: PropTypes.string
};

export default SidebarListSectionIconItem;
