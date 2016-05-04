import React, { PropTypes } from 'react';
import { Grid, GridItem } from 'meteor/qulture:qr-ui-base/components/grid';
import { Avatar } from 'meteor/qulture:qr-ui-base/components';

function Profile(props) {
  const { user } = props;

  return (
    <div className="qr-profile">
      <Grid align="center">
        <GridItem>
          <Avatar user={user} hideName size="x-large" />
        </GridItem>
        <GridItem grow={1}>
          <h1 className="detail-2-color no-margin small-line-height">{user.profile.name}</h1>
          <p className="detail-4-color no-margin-top s-font-size small-line-height">email@email.com</p>
          <p className="detail-3-color no-margin-bottom s-font-size small-line-height">Manager: Michael Scott</p>
          <p className="detail-3-color no-margin s-font-size small-line-height">Teams: Design, Deveopment</p>
          <p className="detail-3-color no-margin s-font-size small-line-height">Tags: Design, Deveopment</p>
        </GridItem>
      </Grid>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object
};

export default Profile;
