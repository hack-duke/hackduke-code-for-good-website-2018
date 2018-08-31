import React from 'react';
import styled from 'react-emotion';

import { SecondaryText, ShadowItem, TitleFont } from '../common-styles';

const CardBase = styled('div')`
    display: flex;
    height: 285px;
    margin-bottom: 25px;
    padding: 25px;
    position: relative;
    cursor: ${props => (props.showPointer ? 'pointer' : 'auto')};

    @media screen and (min-width: 960px) {
        flex-grow: 1;
        flex-basis: 0;
        margin-right: 25px;

        :last-child {
            margin-right: 0;
        }
    }

    ${ShadowItem};
    background: ${props => props.color};
`;

const CardTitle = styled('div')`
    ${TitleFont};
    margin: auto;
    text-transform: uppercase;
    font-size: 1.8em;
    font-weight: bold;
    color: white;
    pointer-events: none;
`;

const CardContent = styled('div')`
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
        const { color, title, children } = this.props;
        return (
            <CardBase
                color={color}
                showPointer={!this.state.opened}
                onClick={this.setOpened}
            >
                {opened ? (
                    <CardContent>{children}</CardContent>
                ) : (
                    <CardTitle>{title}</CardTitle>
                )}
            </CardBase>
        );
    }
}
