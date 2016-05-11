import React, { PropTypes } from 'react';

function ContainerContent(props) {
  const { children, color, large, fullWidth, withSidebar, withSmallSidebar, withMediumSidebar, withPadding } = props;
  let className = 'qr-container-content';
  if(!!fullWidth) className += ' full-width';
  if(!!withSidebar) className += ' with-sidebar';
  if(!!withSmallSidebar) className += ' with-small-sidebar';
  if(!!withMediumSidebar) className += ' with-medium-sidebar';
  if(!!withPadding) className += ' with-padding';
  if(!!large) className += ' large';

  return (
    <div className={className}>
      {children}
    </div>
  )
}

ContainerContent.propTypes = {
  color: PropTypes.string,
  large: PropTypes.bool,
  fullWidth: PropTypes.bool,
  withSidebar: PropTypes.bool,
  withSmallSidebar: PropTypes.bool,
  withMediumSidebar: PropTypes.bool,
  withPadding: PropTypes.bool,
}

export default ContainerContent;
