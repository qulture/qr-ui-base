import React, { PropTypes } from 'react';
import { ColorHelpers } from './../../helpers';
import Link from './../Link';

function TableCell(props) {
  let { children, className, link, color, cols, rows, action } = props;
  const contentDOMItem = !!link || !!action ? <Link link={link} action={action} className="selector" color={color}>{children}</Link> : children;
  className += ` ${color}-color`;
  const style = ColorHelpers.generateStyleForColor('color', color);

  return (
    <td className={className} rowSpan={rows} colSpan={cols} style={style}>
      {contentDOMItem}
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
