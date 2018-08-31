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
