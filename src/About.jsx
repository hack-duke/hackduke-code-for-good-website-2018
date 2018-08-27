import React from 'react';
import styled from 'react-emotion';

import { SectionBase } from './common-styles.jsx';

import AboutLine from './img/ABOUTLINE.svg';

const Container = styled('div')`
    ${SectionBase({ height: '900px' })}
    background-image: url(${AboutLine});
`;

export default () => <Container>About content here</Container>;
