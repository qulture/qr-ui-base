import React, { PropTypes } from 'react';

function WithSidebar(props) {
  const { small, medium } = props;
  let className = 'with-sidebar';
  if(!!small) className = 'with-small-sidebar';
  if(!!medium) className = 'with-medium-sidebar';
  return <div className={className}>{props.children}</div>;
}

WithSidebar.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default WithSidebar;
