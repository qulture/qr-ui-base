import React, { PropTypes } from 'react';
import { Avatar, Loading } from 'meteor/qulture:qr-ui-base/components';

function PersonaAvatar(props) {
  const { persona } = props;
  if(!persona) return false;

  if(_.has(persona, 'profile')) return <Avatar user={persona} {...props} />;

  return (
    <h3 className="no-margin-top">{persona.name}</h3>
  );
}

PersonaAvatar.propTypes = {
  persona: PropTypes.object
};

export default PersonaAvatar;
