import React, { PropTypes } from 'react';
import Icon from './Icon';
import Text from './Text';

function Quote(props) {
  const { children } = props;
  if(!_.size(children)) return false;

  return (
    <Text {...props} >
      <Icon type="quotes-open" color="detail-3" />
      {children}
      <Icon type="quotes-close" color="detail-3" />
    </Text>
  );
}

export default Quote;
