import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionTitle } from '../common-styles';

import SponsorsLine from './sponsors-line.svg';

const Container = styled('div')`
    ${SectionBase({ height: '800px' })}
    background-image: url(${SponsorsLine});
    padding-top: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #f8aa5b;
`;

export default () => (
    <Container>
        <Title>Sponsors</Title>
    </Container>
);
