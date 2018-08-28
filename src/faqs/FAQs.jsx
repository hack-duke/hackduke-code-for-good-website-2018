import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionTitle } from '../common-styles';

import FAQsLine from './faqs-line.svg';

const Container = styled('div')`
    ${SectionBase({ height: '800px' })}
    background-image: url(${FAQsLine});
    padding-top: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #f16a43;
`;

export default () => (
    <Container>
        <Title>FAQs</Title>
    </Container>
);
