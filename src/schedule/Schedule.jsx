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
  color: ${props => (props.active ? props.activeColor : 'initial')};
  transition: opacity 0.2s;
  cursor: pointer;

  /* https://css-tricks.com/injecting-line-break/ */
  display: table;

  margin-top: 0;
  margin-bottom: 1em;
  padding-bottom: 0.1em;

  border-bottom: 2px solid
    ${props => (props.active ? props.activeColor : 'transparent')};

  :hover {
    opacity: 0.85;
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
            name: 'Check-In',
            locations: ['Schiciano Atrium']
          },
          {
            time: '11:00AM - 12:30PM',
            name: 'Opening Ceremony',
            locations: ['Reynolds Theatre']
          },
          {
            time: '1:00PM - 2:00PM',
            name: 'Lunch',
            locations: ['Schiciano Atrium']
          },
          { time: '2:00PM', name: 'Hacking Commences' },
          {
            time: '2:00PM - 2:30PM',
            name: 'Team Formation Mixer',
            locations: ['Schiciano Lobby']
          },
          {
            time: '2:00PM - 8:00PM',
            name: 'Frisbee, Football, Volleyball',
            locations: ['Harrington Quad']
          },
          {
            time: '2:30PM - 3:30PM',
            name: 'Intro to Hardware Hacking by August Ning',
            locations: ['Hudson 201']
          },
          {
            time: '2:30PM - 3:30PM',
            name: 'VR Workshop by Mark Steelman',
            locations: ['Hudson 232']
          },
          {
            time: '3:00PM - 4:30PM',
            name: 'Javascript Workshop by Co-Lab',
            locations: ['Hudson 216']
          },
          {
            time: '3:30PM - 5:00PM',
            name: 'Puppies!!!!!',
            locations: ['Harrington Quad']
          },
          {
            time: '4:30PM - 5:30PM',
            name: 'API Workshop by Archana Ahlawat',
            locations: ['Hudson 115A']
          },
          {
            time: '4:45PM - 6:15PM',
            name: 'Mobile Workshop by Co-Lab',
            locations: ['Hudson 216']
          },
          {
            time: '6:30PM - 8:00PM',
            name: 'Dinner',
            locations: ['Schiciano Atrium']
          },
          {
            time: '8:00PM - 9:00PM',
            name: 'MLH Werewolf',
            locations: ['Schiciano Lobby']
          },
          {
            time: '9:00PM - 10:00PM',
            name: 'Mixer for Female-Identifying and Non-Binary Hackers',
            locations: ['Innovation Co-Lab']
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
            time: '12:00AM - 8:00AM',
            name: 'Nap Time',
            locations: ["Hudson (222, 224, 232)"]
          },
          {
            time: '9:00AM - 9:45AM',
            name: 'Breakfast',
            locations: ['Schiciano Atrium']
          },
            {
            time: '11:00AM - 11:30PM',
            name: 'The Future of Healthcare Technology by Dr. Michael Kerzner (Duke Hospital)',
            locations: ['Hudson 216']
          },
          {
            time: '11:00AM - 12:00PM',
            name: 'Turning Hack into Startup by Kasper Kubica',
            locations: ['Hudson 222']
          },
        
          {
            time: '12:00PM - 1:30PM',
            name: 'Lunch',
            locations: ['Schiciano Atrium']
          },
          { time: '1:30PM', name: 'Hacking Ends' },
          { time: '2:00PM', name: 'Judging Begins' },
          {
            time: '2:00PM - 2:45PM',
            name: 'First Round Judging',
            locations: ['Schiciano Lobby']
          },
          {
            time: '2:45PM - 3:30PM',
            name: 'Finalist Demos',
            locations: ['Schiciano Lobby']
          },
          {
            time: '3:30PM - 4:00PM',
            name: 'Final Judging',
            locations: ['Schiciano Lobby']
          },
          {
            time: '4:00PM',
            name: 'HackDuke Ends'
          },
          {
            time: '4:30PM - 5:30PM',
            name: 'Closing Ceremony',
            locations: ['Reynolds Theatre']
          },
          {
            time: '6:00PM',
            name: 'VTech Bus Leaves',
            locations: ['Science Drive']
          }
        ]
      }
    ]
  };

  componentDidMount() {
    const { schedule } = this.state;
    const now = new Date();

    let i = schedule.length;
    while (i-- > 0) {
      if (now >= schedule[i].date) {
        this.setState({ selectedDayIndex: i });
        break;
      }
    }
  }

  render() {
    const { id, titleColor } = this.props;
    const { selectedDayIndex, schedule } = this.state;

    return (
      <Container id={id}>
        <SectionTitle titleColor={titleColor}>Schedule</SectionTitle>
        <SectionContent columns={true}>
          <SectionLeftColumn sticky={true}>
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
