import _ from 'lodash';
import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import { Grid, GridItem } from './grid';

function AvatarsGrid(props) {
  const { users, limit } = props;
  const reducedUsers = !!limit ? _.slice(users, 0, limit) : users;

  const avatarsDOMItems = _.map(reducedUsers, function(item) {
    return (
      <GridItem key={item._id} gutter="small">
        <Avatar user={item} size="small" hideName />
      </GridItem>
    );
  });

  return (
    <Grid justify="start">
      {avatarsDOMItems}
    </Grid>
  );
}

AvatarsGrid.propTypes = {
  users: PropTypes.array,
  limit: PropTypes.number
}

export default AvatarsGrid;
