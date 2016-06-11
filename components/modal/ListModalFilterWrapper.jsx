import React, { PropTypes, Component } from 'react';
import ListModalItem from './ListModalItem';

function ListModalFilterWrapper(props) {
  const { children } = props;

  return (
    <ListModalItem noPaddingTop noPaddingBottom lineColor="light-detail-1">
      {children}
    </ListModalItem>
  );
};

export default ListModalFilterWrapper;
