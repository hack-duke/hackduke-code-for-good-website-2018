import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { SecondaryText, TitleFont, ShadowItem } from '../common-styles';

const CardBase = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 25px;
  padding: 0;
  overflow: hidden;
  border-top: 6px solid ${props => props.color};
  ${ShadowItem};

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1260px) {
    margin-bottom: 0;
    margin-right: 25px;

    :last-child {
      margin-right: 0;
    }
  }
`;

const rowItemPadding = css`
  padding: 10px 30px;
`;

const EventTime = styled('div')`
  width: 210px;
  text-align: right;
  background: linear-gradient(90deg, #fdfdfd, #fafafa);
  font-weight: bold;
  color: #555;
  ${rowItemPadding};
`;

const EventDetails = styled('div')`
  ${rowItemPadding};
`;

const EventDetailsText = styled('div')`
  display: block;
  font-weight: ${props => (props.primary ? 'bold' : 'auto')};
  margin-bottom: ${props => (props.primary ? '0.33em' : 'auto')};
  color: ${props => (props.primary ? props.primaryColor : '#888')};
  font-size: ${props => (props.primary ? 'auto' : '0.9em')};
`;

const EventRow = styled('div')`
  display: flex;
  ${TitleFont};
  color: #2b2b2b;
  font-size: 1.1em;
  line-height: 1.44em;

  :first-child > div {
    padding-top: 20px;
  }

  :last-child > div {
    padding-bottom: 20px;
  }
`;

export default ({ titleColor, events }) => (
  <CardBase color={titleColor}>
    {events.map(({ time, name, locations }) => (
      <EventRow key={time + name}>
        <EventTime>{time}</EventTime>
        <EventDetails>
          <EventDetailsText primary={true} primaryColor={titleColor}>
            {name}
          </EventDetailsText>
          {locations &&
            locations.map(loc => (
              <EventDetailsText key={loc}>{loc}</EventDetailsText>
            ))}
        </EventDetails>
      </EventRow>
    ))}
  </CardBase>
);
