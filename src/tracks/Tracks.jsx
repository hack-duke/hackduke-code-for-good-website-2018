import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionTitle } from '../common-styles';

import TracksLine from './tracks-line.svg';

const Container = styled('div')`
    ${SectionBase({ height: '800px' })}
    background-image: url(${TracksLine});
    padding-top: 90px;
    position: relative;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #5f76cb;
`;

export default () => (
    <Container>
        <Title>Tracks</Title>
    </Container>
);
