import React, { PropTypes } from 'react';
import { ColorHelpers } from './../../helpers';
import IconLink from './../IconLink';
import { Boxed } from './../boxed';

function BoxedButton(props) {
  const { children, color, borderColor, icon, link, action, label } = props;
  const style = ColorHelpers.generateStyleForColor('border', borderColor);

  return (
    <Boxed color={borderColor} style={style}>
      <IconLink type={icon} link={link} action={action} size="large" color={color}>
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
