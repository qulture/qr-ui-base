import _ from 'lodash';
import React, { PropTypes } from 'react';
import { ColorHelpers } from './../../helpers';

function Table(props) {
  const { borderTop, noColumnsPaddingLeft, noColumnsPaddingRight, noColumnsPaddingSides, smallPadding } = props;
  let className = 'qr-table';
  if(!!borderTop) className += ' border-top';
  if(_.isString(borderTop)) className += ` ${borderTop}-border-color`;
  if(!!noColumnsPaddingLeft) className += ' no-columns-padding-left';
  if(!!noColumnsPaddingRight) className += ' no-columns-padding-right';
  if(!!noColumnsPaddingSides) className += ' no-columns-padding-sides';
  if(!!smallPadding) className += ' small-padding';

  const style = ColorHelpers.generateStyleForColor('border', _.isString(borderTop) ? borderTop : 'main');

  return (
    <table className={className} style={style}>
      {props.children}
    </table>
  );
}

Table.propTypes = {
  borderTop: PropTypes.bool,
  noColumnsPaddingLeft: PropTypes.bool,
  noColumnsPaddingRight: PropTypes.bool,
  noColumnsPaddingSides: PropTypes.bool,
  smallPadding: PropTypes.bool,
}

export default Table;
