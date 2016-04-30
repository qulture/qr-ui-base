import React, { Component, PropTypes } from 'react';
import IconLink from './../IconLink';
import BoxedLineGroup from './BoxedLineGroup';
import { GridItem } from './../grid';;

function BoxedSelector(props) {
  const { children, label, selectorLabel, action, leftContent } = props;
  const iconType = 'plus-circle';
  const iconSize = 'large';
  let titleClassName = 'no-margin';

  let contentDOMItem, rightIcon;
  if(!!children) {
    contentDOMItem = children;
    rightIconDOMItem = <IconLink type={iconType} size={iconSize} action={action}></IconLink>;
  } else {
    titleClassName += ' detail-3-color';
    contentDOMItem = <IconLink type={iconType} size={iconSize} action={action}>{selectorLabel}</IconLink>;
    rightIconDOMItem = null;
  }

  return (
    <BoxedLineGroup leftContent={leftContent} rightContent={rightIconDOMItem}>
      <GridItem l={20}><h4 className={titleClassName}>{label}</h4></GridItem>
      <GridItem l={70}>{contentDOMItem}</GridItem>
      <GridItem l={10}></GridItem>
    </BoxedLineGroup>
  );
}

BoxedSelector.propTypes = {
  label: PropTypes.string,
  selectorLabel: PropTypes.string,
  leftContent: PropTypes.node,
  action: PropTypes.func
}

export default BoxedSelector;
