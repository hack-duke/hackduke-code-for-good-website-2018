import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { SecondaryText, TitleFont, ShadowItem } from '../common-styles';

const dateColSize = '210px';

const CardBase = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 25px;
  padding: 0;
  border-top: 6px solid ${props => props.color};
  background: linear-gradient(90deg, #fdfdfd 33%, #f8f8f8) no-repeat;
  background-size: ${dateColSize};
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
  flex-basis: ${dateColSize};
  flex-grow: 0;
  flex-shrink: 0;
  text-align: right;
  font-weight: bold;
  ${rowItemPadding};
`;

const EventDetails = styled('div')`
  ${rowItemPadding};
`;

const EventDetailsText = styled('div')`
  display: block;
  font-size: 0.9em;
  color: #555;
  ${props =>
    props.primary &&
    css`
      font-weight: bold;
      margin-bottom: 0.33em;
      font-size: 1em;
      color: ${props.primaryColor};
    `};
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
