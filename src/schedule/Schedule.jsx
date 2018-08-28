import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionTitle } from '../common-styles';

import ScheduleLine from './schedule-line.svg';

const Container = styled('div')`
    ${SectionBase({ height: '800px' })}
    background-image: url(${ScheduleLine});
    padding-top: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #a94a64;
`;

export default () => (
    <Container>
        <Title>Schedule</Title>
    </Container>
);
