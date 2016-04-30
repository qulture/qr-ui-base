import React, { PropTypes } from 'react';
import Sidebar from './Sidebar';
import SidebarSection from './SidebarSection';

function UsefulTipsSidebar(props) {
  const { small } = props;

  return (
    <Sidebar small={small}>
      <SidebarSection title="Useful Tips">
        <p>Don't forget to discount for the most common biases and group dynamics that may cloud your judgement and reviews. The main ones are:</p>
        <p>
          <b>Horns and Halo Effect</b>: When the overall impression of someone as generally amazing/terrible clouds judgment against new evidence that might point to the contrary.
        </p>
        <p>
          <b>Recency Effect</b>: Tendency to remember the last few things someone did and to weigh them disproportionately.
        </p>
        <p>
          <b>Fundamental Attribution Error</b>: Either paying too much attention to a person's "ability" and not to the situation/context that impacted their performance, or vice versa.
        </p>
        <p>
          <b>Central Tendency</b>: Playing it safe by rating reviews close close to the midpoint.
        </p>
        <p>
          <b>Availability Bias</b>: Mistaking what's easy to bring to mind with what's more frequent.
        </p>
        <p>
          Make sure that your feedback is constructive. Provide specific observations, describe the consequences (including your feelings), and give really specific actions for potential suggestions.
        </p>
      </SidebarSection>
    </Sidebar>
  );
}

UsefulTipsSidebar.propTypes = {
  small: PropTypes.bool
};

export default UsefulTipsSidebar;
