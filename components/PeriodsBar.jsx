import _ from 'lodash';
import moment from 'moment';
import React, { Component, PropTypes } from 'react';

class PeriodsBar extends Component {
  renderPeriodsItems() {
    const { periods, currentDate, onSelectPeriod } = this.props;
    const firstPeriod = _.first(periods);
    const lastPeriod = _.last(periods);
    const activePeriod = _.find(periods, (item) => moment(currentDate).add(1, 'second').isBetween(item.start, item.end));
    const indexOfActivePeriod = _.indexOf(periods, activePeriod);
    const displayIndexes = _.range(indexOfActivePeriod - 3, indexOfActivePeriod + 4)

    const periodsItemsDOMItem = _.map(displayIndexes, function(index) {
      if (index < 0 || index >= _.size(periods)) {
        return <div key={index} className="qr-period-item inactive"></div>;
      } else {
        const item = periods[index];
        let className = 'qr-period-item';
        if(index === indexOfActivePeriod) className += ' active';
        const onClick = onSelectPeriod ? onSelectPeriod.bind(null, item) : undefined;
        return <a key={item.start} onClick={onClick} className={className}>{item.name}</a>;
      }
    });

    return periodsItemsDOMItem;
  }

  render() {
    const periodsItemsDOMItem = this.renderPeriodsItems();

    return (
      <div className="qr-periods-bar hide-s">
        {periodsItemsDOMItem}
      </div>
    );
  }
}

PeriodsBar.propTypes = {
  periods: PropTypes.array.isRequired,
  currentDate: PropTypes.object,
  onSelectPeriod: PropTypes.func
}

export default PeriodsBar;
