import React, { PropTypes } from 'react';

function TableCell(props) {
  let { children, className, link, color, cols, rows, action } = props;
  const colorClass = ` ${color}-color`;
  const linkClassName = `selector ${colorClass}`;
  const content = !!link || !!action ? <a href={link} onClick={action} className={linkClassName}>{children}</a> : children;
  className += colorClass;

  return (
    <td className={className} rowSpan={rows} colSpan={cols}>
      {content}
    </td>
  );
}

TableCell.propTypes = {
  link: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
}

export default TableCell;
