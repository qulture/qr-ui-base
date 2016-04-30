import React, { PropTypes } from 'react';

function WithSidebar(props) {
  const { small } = props;
  const className = !!small ? 'with-small-sidebar' : 'with-sidebar';
  return <div className={className}>{props.children}</div>;
}

WithSidebar.propTypes = {
  small: PropTypes.bool
};

export default WithSidebar;
