import React, { PropTypes } from 'react';
import { Grid } from './../grid';;
import Icon from './../Icon';
import Boxed from './Boxed';

function BoxedLineGroup(props) {
  const { rightContent, leftContent, noPadding } = props;

  return (
    <Boxed noPadding={noPadding} rightContent={rightContent} leftContent={leftContent}>
      <Grid justify="start" noWrap>
        {props.children}
      </Grid>
    </Boxed>
  );
}

Boxed.propTypes = {
  rightContent: PropTypes.node,
  leftContent: PropTypes.node,
  noPadding: PropTypes.bool,
}

export default BoxedLineGroup;
