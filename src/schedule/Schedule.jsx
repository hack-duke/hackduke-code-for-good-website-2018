import React from 'react';
import styled from 'react-emotion';

import {
  SectionBase,
  SectionContent,
  SectionTextContent
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

const PrinciplesContainer = styled('div')`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
`;

const schedule = [
  [
    { time: '9:00AM - 10:00AM', name: 'first event here!' },
    { time: '10:00AM - 11:00AM', name: 'second event here!' }
  ],
  [
    { time: '12:00AM - 1:00PM', name: 'third event here!' },
    { time: '1:00PM - 2:00PM', name: 'fourth second event here!' },
    { time: '2:00PM - 3:00PM', name: 'fifth second event here!' }
  ]
];

export default ({ id, titleColor }) => (
  <Container id={id}>
    <SectionTitle titleColor={titleColor}>Schedule</SectionTitle>
    <SectionContent>
      <SectionTextContent>
        This is the schedule! Woohoo! Get ~groovy~
      </SectionTextContent>
      <PrinciplesContainer>
        <ScheduleItemCard titleColor="#3649A3">{schedule}</ScheduleItemCard>
      </PrinciplesContainer>
    </SectionContent>
  </Container>
);
