import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionTitle } from '../common-styles';

import AboutLine from './about-line.svg';
import AboutGraphic from './about-graphic.svg';

const Container = styled('div')`
    ${SectionBase({ height: '800px' })}
    background-image: url(${AboutLine});
    padding-top: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #3a3d6d;
`;

const AboutGraphicWrapper = styled('div')`
    position: absolute;
    top: 90px;
    right: 140px;
    width: 700px;
`;

export default () => (
    <Container>
        <Title>About</Title>
        <AboutGraphicWrapper>
            <img src={AboutGraphic} />
        </AboutGraphicWrapper>
    </Container>
);
