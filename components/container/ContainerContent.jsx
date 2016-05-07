import React, { PropTypes } from 'react';

function ContainerContent(props) {
  const { children, color, large, fullWidth, withSidebar, withSmallSidebar, withMediumSidebar } = props;
  let className = 'qr-container-content';
  if(!!fullWidth) className += ' full-width';
  if(!!withSidebar) className += ' with-sidebar';
  if(!!withSmallSidebar) className += ' with-small-sidebar';
  if(!!withMediumSidebar) className += ' with-medium-sidebar';
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
}

export default ContainerContent;
