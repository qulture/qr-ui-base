import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import { Grid, GridItem } from './grid';
import Icon from './Icon';

const DOWN_KEY = 40;
const UP_KEY = 38;
const LEFT_KEY = 37;
const RIGHT_KEY = 39;

class DatePicker extends Component {
  constructor(props) {
    super(props);

    const { value } = props;
    const selectedDate = !!value ? moment(value) : null;
    this.state = { selectedDate, navMoment: moment(value) };

    this.renderDay = this.renderDay.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.setToday = this.setToday.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { onOpen } = this.props
    // Disable scroll for body and handle key events
    if(!!newProps.open) {
      $('body').addClass('no-scroll')
      $('body').on('keydown', this.onKeyDown);
    } else {
      $('body').removeClass('no-scroll');
      $('body').off('keydown', this.onKeyDown);
    }
    // Call on open prop
    const isOpening = newProps.open !== this.props.open && newProps.open === OPEN;
    if(isOpening && onOpen) onOpen();
  }

  stopParentClickPropagation(event) {
    event.stopPropagation();
  }

  selectDate(newDate) {
    this.setState({ selectedDate: newDate });
  }

  nextMonth() {
    const { navMoment } = this.state;
    navMoment.add(1, 'month');
    this.setState({ navMoment: navMoment });
  }

  prevMonth() {
    const { navMoment } = this.state;
    navMoment.subtract(1, 'month');
    this.setState({ navMoment: navMoment });
  }

  setToday() {
    this.setState({ navMoment: moment(), selectedDate: moment() });
  }

  clearValue() {
    this.setState({ selectedDate: null });
  }

  onKeyDown(event) {
    const { keyCode } = event;
    console.log(keyCode);
    if(keyCode === RIGHT_KEY) this.nextMonth();
    if(keyCode === LEFT_KEY) this.prevMonth();
  }

  onCloseHandler() {
    const { selectedDate } = this.state;
    const { onClose } = this.props;
    const newDate = !!selectedDate ? selectedDate.toDate() : null;
    if(!!onClose) onClose(newDate);
  }

  renderHeader() {
    const { selectedDate } = this.state;
    const headerDate = selectedDate || moment();
    const month = headerDate.format('MMMM');
    const year = headerDate.format('YYYY');
    const day = headerDate.format('DD');

    return (
      <div className="qr-date-picker-header text-center">
        <div className="qr-date-picker-header-month">{month}</div>
        <div className="qr-date-picker-header-day">{day}</div>
        <div className="qr-date-picker-header-year">{year}</div>
      </div>
    );
  }

  renderBody() {
    const { navMoment } = this.state;
    const monthYear = navMoment.format('MMMM YYYY');
    const daysDOMItems = this.renderDays();

    return (
      <div className="qr-date-picker-content">
        <Grid align="center">
          <GridItem>
            <Icon type="caret-left" color="main" action={this.prevMonth} />
          </GridItem>
          <GridItem grow={1}>
            <div className="xl-font-size detail-3-color text-center">{monthYear}</div>
          </GridItem>
          <GridItem>
            <Icon type="caret-right" color="main" action={this.nextMonth} />
          </GridItem>
        </Grid>

        <table className="qr-date-picker-table">
          <thead>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>

          {daysDOMItems}
        </table>
      </div>
    );
  }

  renderDay(iterator) {
    const { selectedDate } = this.state;
    const dayOfMonth = iterator.format('D');
    const isToday = moment().isSame(iterator, 'day');
    const isSelected = iterator.isSame(selectedDate, 'day');
    let className = '';
    if(isToday) className = 'today';
    if(isSelected) className = 'active';
    const selectDate = this.selectDate.bind(this, iterator.clone());
    const key = `day=${dayOfMonth}`;

    return (
      <td key={key}>
        <a className={className} onClick={selectDate}>
          {dayOfMonth}
        </a>
      </td>
    );
  }

  renderWeek(daysDOMItems, iterator, week) {
    const key = `week-${week}`;
    return <tr key={key}>{daysDOMItems}</tr>;
  }

  renderDays() {
    const self = this;
    const { navMoment } = this.state;
    const startOfMonth = navMoment.clone().startOf('month');
    const iterator = startOfMonth.clone();
    const endOfMonth = navMoment.clone().endOf('month');
    let hasMonthStarted = false;
    let hasMonthEnded = false;

    const weeksDOMItems = _.map(_.range(0, 6), function(week) {
      const daysDOMItems = _.map(_.range(0, 7), function(dayOfWeek) {
        if(!hasMonthStarted) hasMonthStarted = dayOfWeek >= startOfMonth.format('e');
        if(!hasMonthEnded) hasMonthEnded = iterator.isAfter(endOfMonth);
        if(!hasMonthStarted || hasMonthEnded) return <td key={'blank-' + week + dayOfWeek}></td>;

        const dayDOMItem = self.renderDay(iterator);
        iterator.add(1, 'day');
        return dayDOMItem;
      });

      return self.renderWeek(daysDOMItems, iterator, week);
    })

    return (
      <tbody>
        {weeksDOMItems}
      </tbody>
    );
  }

  renderFooter() {
    const { open, onClose } = this.props;

    return (
      <div className="qr-date-picker-footer">
        <Grid align="center">
          <GridItem>
            <a className="qr-date-picker-footer-link m-font-sizes" onClick={this.setToday}>Today</a>
          </GridItem>

          <GridItem>
            <a className="qr-date-picker-footer-link m-font-sizes alert-color" onClick={this.clearValue}>Clear</a>
          </GridItem>

          <GridItem>
            <a className="qr-date-picker-footer-link m-font-sizes" onClick={this.onCloseHandler}>Close</a>
          </GridItem>
        </Grid>
      </div>
    );
  }

  render() {
    const { open, onClose } = this.props;
    if(!open) return false;

    const headerDOMItem = this.renderHeader();
    const bodyDOMItem = this.renderBody();
    const footerDOMItem = this.renderFooter();

    return (
      <div className="qr-date-picker-wrapper" onClick={this.onCloseHandler}>
        <div className="qr-date-picker" onClick={this.stopParentClickPropagation}>
          {headerDOMItem}
          {bodyDOMItem}
          {footerDOMItem}
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  open: PropTypes.bool,
  value: PropTypes.object,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
}

export default DatePicker;
