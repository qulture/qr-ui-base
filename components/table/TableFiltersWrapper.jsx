import React from 'react';

function TableFiltersWrapper(props) {
  const { children } = props;

  return (
    <div className="xx-large-padding-left xx-large-padding-right">
      {children}
    </div>
  );
}

export default TableFiltersWrapper;
