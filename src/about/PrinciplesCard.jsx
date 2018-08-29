import React from 'react';
import styled from 'react-emotion';

import { SecondaryText } from '../common-styles';

const CardBase = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
    margin-right: 20px;
    border-radius: 6px;
    padding: 25px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 12.5px 40px rgba(0, 0, 0, 0.07);
    border-top: 6px solid ${props => props.color};

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
    text-align: left;
`;

export default ({ title, children, titleColor, textColor }) => (
    <CardBase color={titleColor}>
        <CardTitle color={titleColor}>{title}</CardTitle>
        <CardText color={textColor}>{children}</CardText>
    </CardBase>
);
