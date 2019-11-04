import { SectionList } from 'react-native';
import { connect } from 'react-redux';

import {createId, formatDate} from '../../../../util';

export default connect(mapStateToProps)(SectionList);

function mapStateToProps(state) {
  const events = extractEventsFromState(state);
  const upcomingEvents = filterUpcomingEvents(events);
  const chronologicalUpcomingEvents = sortEventsByDate(upcomingEvents);
  return {
    sections: reduceEventsToSections(chronologicalUpcomingEvents),
  };
}

function extractEventsFromState(state) {
  return [
    ...state.vaccinations,
    {
      date: state.procedureDate,
      id: createId(),
      name: 'Procedure',
    },
  ];
}

function filterUpcomingEvents(events) {
  return events.filter(isUpcomingEvent);
}

function isUpcomingEvent(event) {
  return (
    isScheduled(event) &&
    (isInTheFuture(event) || isToday(event)) &&
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

function isToday(event) {
  return formatDate(event.date) === formatDate(new Date());
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
  return !!event.isCompleted;
}

function calculateMillisecondsUntilEvent(event) {
  return event.date - new Date();
}

function sortEventsByDate(events) {
  return events.sort(compareEventDates);
}

function compareEventDates({ date: dateA }, { date: dateB }) {
  return dateA - dateB;
}

function reduceEventsToSections(events) {
  return events.reduce(assignEventToSection, []);
}

function assignEventToSection(sections, event) {
  const eventSection = findEventSection(sections, event);
  return eventSection
    ? mapSectionsToSectionsWithEvent(sections, eventSection, event)
    : addNewSectionWithEventToSections(sections, event);
}

function findEventSection(sections, event) {
  return sections.find(section => haveTitleMatchingDate(section, event));
}

function haveTitleMatchingDate({ title }, { date }) {
  return title === formatDate(date);
}

function mapSectionsToSectionsWithEvent(sections, eventSection, event) {
  return sections.map(section =>
    addEventToEventSection(section, eventSection, event)
  );
}

function addEventToEventSection(section, eventSection, event) {
  if (haveSameTitle(section, eventSection)) {
    return addEventToSection(section, event);
  }
  return section;
}

function haveSameTitle({ title: titleA }, { title: titleB }) {
  return titleA === titleB;
}

function addEventToSection(section, event) {
  return {
    data: [...section.data, event],
    title: section.title,
  };
}

function addNewSectionWithEventToSections(sections, event) {
  return [
    ...sections,
    {
      data: [event],
      title: formatDate(event.date),
    },
  ];
}
