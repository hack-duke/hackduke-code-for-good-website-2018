import React from 'react';
import styled from 'react-emotion';

import {
  SectionBase,
  SectionContent,
  SectionTextContent,
  SectionLeftColumn,
  SectionRightColumn,
  PrimaryFont
} from '../common-styles';
import SectionTitle from '../SectionTitle';

import ScheduleLine from './schedule-line.svg';
import ScheduleLineExt from './schedule-line-ext.svg';
import ScheduleItemCard from './ScheduleItemCard';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096,
    backgroundImage: `url(${ScheduleLine}), url(${ScheduleLineExt})`
  })};
`;

const Day = styled('h3')`
  ${PrimaryFont};
  color: ${props => (props.active ? props.activeColor : 'auto')};
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  transition: ${props => (props.active ? 'none' : 'color 0.2s')};
  text-underline-position: under;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 1em;

  :hover {
    color: ${props => (props.active ? 'auto' : '#5f5f5f')};
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const locale = 'en-US';

const formatDate = date =>
  `${date.toLocaleDateString(locale, {
    weekday: 'long'
  })}, ${date.toLocaleDateString('en-US', {
    month: 'long'
  })} ${date.getDate()}`;

export default class Schedule extends React.Component {
  state = {
    selectedDayIndex: 0,
    schedule: [
      {
        // Months are zero-indexed for whatever reason
        // This is a historical artifact from the Java (yes, Java) APIs
        date: new Date(2018, 9, 13),
        events: [
          {
            time: '9:00AM - 10:00AM',
            name: 'first event here!',
            locations: ['Schiciano Atrium']
          },
          {
            time: '10:00AM - 11:00AM',
            name: 'second event here!',
            locations: ['Reynolds Theatre']
          }
        ]
      },
      {
        date: new Date(2018, 9, 14),
        events: [
          {
            time: '12:00AM - 1:00PM',
            name: 'third event here!',
            locations: ['asdasds']
          },
          {
            time: '1:00PM - 2:00PM',
            name: 'fourth second event here!',
            locations: ['asdsds']
          },
          {
            time: '2:00PM - 3:00PM',
            name: 'fifth second event here!',
            locations: ['asdasdsd', 'asdasdsdiji']
          }
        ]
      }
    ]
  };

  render() {
    const { id, titleColor } = this.props;
    const { selectedDayIndex, schedule } = this.state;

    return (
      <Container id={id}>
        <SectionTitle titleColor={titleColor}>Schedule</SectionTitle>
        <SectionContent columns={true}>
          <SectionLeftColumn>
            <SectionTextContent>
              {schedule.map(({ date, events }, i) => (
                <Day
                  active={i === selectedDayIndex}
                  activeColor={titleColor}
                  key={date}
                  onClick={() => this.setState({ selectedDayIndex: i })}
                >
                  {formatDate(date)}
                </Day>
              ))}
            </SectionTextContent>
          </SectionLeftColumn>
          <SectionRightColumn>
            <ScheduleItemCard
              titleColor={titleColor}
              events={schedule[selectedDayIndex].events}
            />
          </SectionRightColumn>
        </SectionContent>
      </Container>
    );
  }
}
