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

export default ({ id, titleColor }) => (
  <Container id={id}>
    <SectionTitle titleColor={titleColor}>Schedule</SectionTitle>
    <SectionContent>
      <SectionTextContent>
        This is the schedule! Woohoo! Get ~groovy~
      </SectionTextContent>
      <PrinciplesContainer>
        <ScheduleItemCard title="Event 1" titleColor="#3649A3">
          This is an event. Try to contain your excitement, please.
        </ScheduleItemCard>
        <ScheduleItemCard title="Event 2" titleColor="#A94A64">
          Oh my goodness! Another event!? You betcha.
        </ScheduleItemCard>
        <ScheduleItemCard title="Event 3" titleColor="#FFAA5B">
          At this point I know what you're thinking. Yes, this is incredible.
          No, you aren't dreaming.
        </ScheduleItemCard>
      </PrinciplesContainer>
    </SectionContent>
  </Container>
);
