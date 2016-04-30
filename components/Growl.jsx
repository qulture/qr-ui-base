import React, { Component, PropTypes } from 'react';

class Growl extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentWillReceiveProps(props) {
    const { message } = props;
    this.setState({ open: !!_.size(message) });
  }

  render() {
    const { open } = this.state;
    const { message: messageObject } = this.props;

    if(!open) return false;

    const message = _.result(messageObject, 'message', messageObject);
    const messageType = _.result(messageObject, 'type', '');
    className=`qr-notification ${messageType}`;

    return (
      <div className={className}>
        {message}
      </div>
    );
  }
}

Growl.propTypes = {
  message: PropTypes.node,
};

export default Growl;
