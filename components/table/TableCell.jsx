import React, { PropTypes } from 'react';

function TableCell(props) {
  const { children, className, link } = props;
  const content = !!link ? <a href={link} className="selector">{children}</a> : children;

  return (
    <td className={className}>
      {content}
    </td>
  );
}

TableCell.propTypes = {
  link: PropTypes.string
}

export default TableCell;
