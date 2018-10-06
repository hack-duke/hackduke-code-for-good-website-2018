import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

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
            time: '9:00AM - 10:45AM',
            name: 'Check-in',
            locations: ['Schiciano Atrium']
          },
          {
            time: '11:00AM - 12:15PM',
            name: 'Opening Ceremony',
            locations: ['Reynolds Theatre']
          },
          {
            time: '12:30PM - 1:00PM',
            name: 'Track Mentor Talks',
            locations: [
              'Scichiano A: Education',
              'Scichiano B: Health',
              'Hudson 207: Energy',
              'Hudson 208: Inequality'
            ]
          },
          {
            time: '1:00PM - 2:00PM',
            name: 'Lunch',
            locations: ['CIEMAS 1st floor']
          },
          { time: '2:00PM', name: 'Hacking Commences' },
          {
            time: '2:00PM - 2:30PM',
            name: 'Team Formation Help',
            locations: ['CIEMAS']
          },
          {
            time: '2:00PM - 8:00PM',
            name: 'Frisbee, Football, Volleyball',
            locations: ['Harrington Quad']
          },
          {
            time: '2:30PM - 6:30PM',
            name: 'Workshops & Talks',
            locations: ['Hudson']
          },
          {
            time: '3:00PM - 5:00PM',
            name: 'Puppies!!!!!',
            locations: ['Harrington Quad']
          },
          {
            time: '6:30PM - 8:00PM',
            name: 'Dinner',
            locations: ['Schiciano Atrium']
          },
          {
            time: '8:00PM - 9:00PM',
            name: 'MLH Werewolf',
            locations: ['CIEMAS 1st floor']
          },
          {
            time: '9:00PM - 10:00PM',
            name: 'WIT Mixer',
            locations: ['CoLab']
          },
          {
            time: '10:00PM - 11:00PM',
            name: 'Nerf War',
            locations: ["Twinnie's 2nd Floor"]
          },
          {
            time: '11:00PM - 11:45PM',
            name: 'Spicy Noodle Challenge',
            locations: ['Schiciano Atrium']
          }
        ]
      },
      {
        date: new Date(2018, 9, 14),
        events: [
          {
            time: '12:00AM - 8:00AM',
            name: 'Midnight Snacks',
            locations: ["Twinnie's"]
          },
          {
            time: '9:00AM - 9:45AM',
            name: 'Breakfast',
            locations: ['Schiciano Atrium']
          },
          {
            time: '10:00AM - 12:00PM',
            name: 'Workshop & Talks',
            locations: ['Hudson']
          },
          {
            time: '12:00PM - 1:30PM',
            name: 'Lunch',
            locations: ['Schiciano Atrium']
          },
          { time: '1:30PM', name: 'Hacking Ends' },
          { time: '2:00PM', name: 'Judging Begins' },
          {
            time: '2:00PM - 3:30PM',
            name: 'Judging / Demos',
            locations: ['CIEMAS 1st Floor']
          },
          {
            time: '3;45PM - 4:15PM',
            name: 'Judging Finalists',
            locations: ['CIEMAS 1st Floor']
          },
          { name: 'HackDuke Ends' },
          {
            time: '4:30PM - 5:30PM',
            name: 'Closing Ceremony',
            locations: ['Reynolds Theatre']
          },
          {
            time: '6:00PM - 6:00PM',
            name: 'VA Bus Leaves',
            locations: ['Science Drive']
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
            <SectionTextContent sticky={true}>
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
