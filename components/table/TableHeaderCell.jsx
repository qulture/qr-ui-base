import React, { PropTypes } from 'react';
import Icon from './../Icon';

function TableHeaderCell(props) {
  let { className, large, small, icon, iconLink, width } = props;
  if(!!large) className += ' large';
  if(!!small) className += ' small';
  const style = { width: `${width}%` };

  const iconDOMItem = !!icon ? <Icon type={icon} size="large" link={iconLink} /> : '';

  return (
    <th className={className} style={style}>
      <span>{props.children}</span>
      {iconDOMItem}
    </th>
  );
}

TableHeaderCell.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconLink: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  width: PropTypes.number
};

TableHeaderCell.defaultProp = {
  className: ''
};

export default TableHeaderCell;
