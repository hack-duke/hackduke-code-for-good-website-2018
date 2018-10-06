import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { TitleFont, ShadowItem } from '../common-styles';

const dateColWidth = '190px';
const dateColFullWidth = '210px';

const CardBase = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0;
  border-top: 6px solid ${props => props.color};
  background: linear-gradient(90deg, #fdfdfd 33%, #f8f8f8) repeat-y;
  ${ShadowItem};

  background-size: ${dateColWidth};
  @media screen and (min-width: 900px) {
    background-size: ${dateColFullWidth};
  }
`;

const rowItemPadding = css`
  padding: 10px 20px;
  @media screen and (min-width: 900px) {
    padding: 10px 30px;
  }
`;

const EventTime = styled('div')`
  flex-basis: ${dateColWidth};
  @media screen and (min-width: 900px) {
    flex-basis: ${dateColFullWidth};
  }
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
