import React, { PropTypes } from 'react';
import Icon from './../Icon';

function TableHeaderCell(props) {
  let { className, large, icon, iconLink } = props;
  if(!!large) className += ' large';

  const iconDOMItem = !!icon ? <Icon type={icon} size="large" link={iconLink} /> : '';

  return (
    <th className={className}>
      <span>{props.children}</span>
      {iconDOMItem}
    </th>
  );
}

TableHeaderCell.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconLink: PropTypes.string,
  large: PropTypes.bool
};

TableHeaderCell.defaultProp = {
  className: ''
};

export default TableHeaderCell;
