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
  padding: 20px 30px;
`;

const EventTime = styled('div')`
  width: 210px;
  background: linear-gradient(90deg, #fdfdfd, #fafafa);
  text-align: right;
  font-weight: bold;
  color: #636363;
  ${rowItemPadding};
`;

const EventRow = styled('div')`
  display: flex;
  ${TitleFont};
  color: #2b2b2b;
  font-size: 1.1em;
`;

export default ({ titleColor, events }) => (
  <CardBase color={titleColor}>
    {events.map(({ time, name }) => (
      <EventRow key={time + name}>
        <EventTime>{time}</EventTime>
      </EventRow>
    ))}
  </CardBase>
);
