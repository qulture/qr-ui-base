import React from 'react';

function TableHeader(props) {
  const { className } = props;

  return (
    <thead className={className}>
      {props.children}
    </thead>
  );
}

export default TableHeader;
