import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionTitle } from './common-styles.jsx';

import AboutLine from './img/ABOUTLINE.svg';

const Container = styled('div')`
    ${SectionBase({ height: '900px' })}
    background-image: url(${AboutLine});
`;

const Title = styled('div')`
    ${SectionTitle};
`;

export default () => (
    <Container>
        <Title>About</Title>
    </Container>
);
