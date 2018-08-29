import React from 'react';
import styled from 'react-emotion';

import { SecondaryText, ShadowItem } from '../common-styles';

const CardBase = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    height: 260px;
    margin-bottom: 25px;
    margin-right: 25px;
    padding: 25px;
    cursor: ${props => (props.showPointer ? 'pointer' : 'auto')};

    :last-child {
        margin-right: 0;
    }

    ${ShadowItem};
    background: ${props => props.color};
`;

const CardTitle = styled('div')`
    margin: auto;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-size: 1.8em;
    color: white;
    pointer-events: none;
`;

const CardContent = styled('div')`
    ${SecondaryText} color: white;
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
