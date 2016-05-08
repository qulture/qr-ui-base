import React, { PropTypes } from 'react';

function TableCell(props) {
  let { children, className, link, color } = props;
  const colorClass = ` ${color}-color`;
  const linkClassName = `selector ${colorClass}`;
  const content = !!link ? <a href={link} className={linkClassName}>{children}</a> : children;
  className += colorClass;

  return (
    <td className={className}>
      {content}
    </td>
  );
}

TableCell.propTypes = {
  link: PropTypes.string,
  color: PropTypes.string
}

export default TableCell;
