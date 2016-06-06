import _ from 'lodash';
import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import HorizontalTimeline from './HorizontalTimeline';
import HorizontalTimelineItem from './HorizontalTimelineItem';

class PeriodsBar extends Component {
  renderPeriodsItems() {
    const { periods, currentDate, onSelectPeriod } = this.props;
    const firstPeriod = _.first(periods);
    const lastPeriod = _.last(periods);
    const activePeriod = _.find(periods, (item) => moment(currentDate).add(1, 'second').isBetween(item.start, item.end));
    const indexOfActivePeriod = _.indexOf(periods, activePeriod);
    const displayIndexes = _.range(indexOfActivePeriod - 3, indexOfActivePeriod + 4)

    const periodsItemsDOMItem = _.map(displayIndexes, function(index) {
      if (index < 0 || index >= _.size(periods)) return <HorizontalTimelineItem key={index} inactive />;
      const item = periods[index];
      const active = index === indexOfActivePeriod;
      const onClick = onSelectPeriod ? onSelectPeriod.bind(null, item) : undefined;
      return <HorizontalTimelineItem key={item.start} action={onClick} active={active}>{item.name}</HorizontalTimelineItem>;
    });

    return periodsItemsDOMItem;
  }

  render() {
    const periodsItemsDOMItem = this.renderPeriodsItems();

    return (
      <HorizontalTimeline>
        {periodsItemsDOMItem}
      </HorizontalTimeline>
    );
  }
}

PeriodsBar.propTypes = {
  periods: PropTypes.array.isRequired,
  currentDate: PropTypes.object,
  onSelectPeriod: PropTypes.func
}

export default PeriodsBar;
