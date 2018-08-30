import React from 'react';
import styled from 'react-emotion';

import { SecondaryText, ShadowItem } from '../common-styles';

const CardBase = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
    margin-right: 25px;
    padding: 20px 25px;
    border-top: 6px solid ${props => props.color};
    ${ShadowItem};
    :last-child {
        margin-right: 0;
    }
`;

const CardTitle = styled('span')`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.color};
`;

const CardText = styled('p')`
    ${SecondaryText};
    font-size: 1.25em;
`;

export default ({ title, children, titleColor, textColor }) => (
    <CardBase color={titleColor}>
        <CardTitle color={titleColor}>{title}</CardTitle>
        <CardText color={textColor}>{children}</CardText>
    </CardBase>
);
