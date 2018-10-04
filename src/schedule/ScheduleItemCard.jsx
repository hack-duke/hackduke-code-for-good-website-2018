import React from 'react';
import styled from 'react-emotion';

import { SecondaryText, TitleFont, ShadowItem } from '../common-styles';

const CardBase = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 25px;
  padding: 20px 25px;
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

export default ({ titleColor, events }) => (
  <CardBase color={titleColor}>
    {events.map(({ time, name }) => `${time}: ${name}`)}
  </CardBase>
);
