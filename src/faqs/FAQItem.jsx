import React from 'react';
import styled from 'react-emotion';

import { SecondaryText } from '../common-styles';

const FAQItem = styled('div')``;

const FAQTitle = styled('h2')`
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 1.5em;
`;

const FAQText = styled('div')`
    ${SecondaryText};
    font-size: 1.25em;
`;

export default ({ title, children }) => (
    <FAQItem>
        <FAQTitle>{title}</FAQTitle>
        <FAQText>{children}</FAQText>
    </FAQItem>
);
