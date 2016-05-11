import _ from 'lodash';
import React, { PropTypes, Component } from 'react';
import Avatar from './../Avatar';

class OrgChart extends Component {
  renderUser(user) {
    const subordinatesDOMItems = _.map(user.subordinates, (doc) => this.renderUser(doc));
    const subordinatesWrapper = _.size(subordinatesDOMItems) ? <ul>{subordinatesDOMItems}</ul> : false;
    const size = _.has(user, 'supervisorId') ? 'small' : 'default';
    const color = _.has(user, 'supervisor.supervisorId') ? 'detail-3' : 'main';

    return (
      <li key={user._id}>
        <Avatar user={user} size={size} color={color} />
        {subordinatesWrapper}
      </li>
    );
  }

  render() {
    const { users } = this.props;
    let className = 'qr-org-chart';
    if(_.size(users) === 1) className += ' one-boss';

    const usersDOMItems = _.map(users, (doc) => this.renderUser(doc));

    return (
      <ul className={className}>
        {usersDOMItems}
      </ul>
    );
  }
}

OrgChart.propTypes = {
  users: PropTypes.array
};

export default OrgChart;
