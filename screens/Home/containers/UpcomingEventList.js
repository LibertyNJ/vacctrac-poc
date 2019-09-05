import { connect } from 'react-redux';

import EventList from '../components/EventList';

export default connect(mapStateToProps)(EventList);

function mapStateToProps(state) {
  return {
    events: [
      ...state.vaccinations,
      {
        date: state.procedureDate,
        key: 'procedure',
        name: 'Procedure',
      },
    ]
      .filter(isUpcomingEvent)
      .sort(compareEventDates),
  };
}

function isUpcomingEvent(event) {
  return (
    isScheduled(event) &&
    isInTheFuture(event) &&
    isWithinThirtyDays(event) &&
    !isCompleted(event)
  );
}

function isScheduled(event) {
  return !!event.date;
}

function isInTheFuture(event) {
  const millisecondsUntilEvent = calculateMillisecondsUntilEvent(event);
  return millisecondsUntilEvent > 0;
}

function isWithinThirtyDays(event) {
  const MILLISECONDS_PER_SECOND = 1000;
  const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * 60;
  const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * 60;
  const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * 24;
  const MILLISECONDS_IN_THIRTY_DAYS = MILLISECONDS_PER_DAY * 30;
  const millisecondsUntilEvent = calculateMillisecondsUntilEvent(event);
  return millisecondsUntilEvent < MILLISECONDS_IN_THIRTY_DAYS;
}

function isCompleted(event) {
  return !!event.completed;
}

function calculateMillisecondsUntilEvent(event) {
  return event.date - new Date();
}

function compareEventDates({ date: dateA }, { date: dateB }) {
  return dateA - dateB;
}
