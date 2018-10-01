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

const CardTitle = styled('span')`
  ${TitleFont};
  font-size: 1.5em;
  font-weight: bold;
  color: ${props => props.color};
`;

const CardText = styled('p')`
  ${SecondaryText};
  font-size: 1.25em;
`;

export default class ScheduleItemCard extends React.PureComponent {
  state = {
    firstDay: true
  };

  changeDay = firstDay => {
    this.setState({ firstDay: firstDay });
  };

  render() {
    const { firstDay } = this.state;
    const { title, children, titleColor, textColor } = this.props;
    return (
      <CardBase color={titleColor}>
        <CardTitle color={titleColor}>
          <div>
            <h3 onClick={() => this.changeDay(true)}>
              {firstDay ? <u> Saturday 10/3 </u> : 'Saturday 10/3'}
            </h3>
            <h3 onClick={() => this.changeDay(false)}>
              {firstDay ? 'Sunday 10/4' : <u> Sunday 10/4</u>}
            </h3>
          </div>
        </CardTitle>
        <CardText color={textColor}>
          {firstDay
            ? children[0].map(event => (
                <div>{event.time + ': \t' + event.name}</div>
              ))
            : children[1].map(event => (
                <div>{event.time + ': \t' + event.name}</div>
              ))}
        </CardText>
      </CardBase>
    );
  }
}
