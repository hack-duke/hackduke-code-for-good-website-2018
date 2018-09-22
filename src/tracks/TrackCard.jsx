import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { SecondaryText, ShadowItem, TitleFont } from '../common-styles';

const cardHeight = '285px';

const CardBase = styled('div')`
  height: ${cardHeight};
  margin-bottom: 25px;
  cursor: ${props => (props.showPointer ? 'pointer' : 'auto')};

  @media screen and (min-width: 960px) {
    flex-grow: 1;
    flex-basis: 0;
    margin-right: 25px;

    :last-child {
      margin-right: 0;
    }
  }

  ${props => ShadowItem(props.material)};
`;

const fillParent = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CardClipBounds = styled('div')`
  ${fillParent};
  overflow: hidden;
`;

const cubicEaseOutTransition = css`
  transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1),
    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`;

const TitleWrapper = styled('div')`
  ${TitleFont};
  font-size: 1.75em;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  pointer-events: none;
`;

const Icon = styled('img')`
  height: 80px;
  width: 80px;
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const CardContent = styled('div')`
  ${fillParent};
  padding: 25px;
  color: white;

  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: ${props =>
    `translateY(${props.visible ? '0' : props.translateY})`};
  ${cubicEaseOutTransition};
`;

const CardTextStyle = css`
  ${SecondaryText};
  color: white;
`;

export default class TrackCard extends React.PureComponent {
  state = {
    opened: false
  };

  setOpened = () => this.setState({ opened: true });

  render() {
    const { opened } = this.state;
    const { material, icon, title, children } = this.props;
    return (
      <CardBase
        material={material}
        showPointer={!opened}
        onClick={this.setOpened}
      >
        <CardClipBounds>
          <CardContent visible={!opened} translateY={`-${cardHeight}`}>
            <TitleWrapper>
              <Icon src={icon} />
              {title}
            </TitleWrapper>
          </CardContent>
          <CardContent
            visible={opened}
            css={CardTextStyle}
            translateY={cardHeight}
          >
            {children}
          </CardContent>
        </CardClipBounds>
      </CardBase>
    );
  }
}
