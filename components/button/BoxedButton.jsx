import React, { PropTypes } from 'react';
import IconLink from './../IconLink';
import { Boxed } from './../boxed';

function BoxedButton(props) {
  const { children, color, borderColor, icon, link, action, label } = props;

  return (
    <Boxed color={borderColor}>
      <IconLink type={icon} link={link} action={action} size="x-large" color={color}>
        {children}
      </IconLink>
    </Boxed>
  );
}

BoxedButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  link: PropTypes.string,
  action: PropTypes.func,
}

export default BoxedButton;
