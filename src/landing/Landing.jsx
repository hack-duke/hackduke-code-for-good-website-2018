import React from 'react';
import styled from 'react-emotion';

import Home from './home-bg.svg';
import LogoImage from './hackduke-logo.png';

import { PrimaryFont, SectionBase, ShadowItem } from '../common-styles';
import Button from '../Button';

const Container = styled('div')`
    ${SectionBase({ heightPx: 900, backgroundImage: `url(${Home})` })};
`;

const LandingContent = styled('div')`
    ${PrimaryFont};
    padding-top: 140px;
    padding-bottom: 140px;
    font-size: 1.5em;
    line-height: 1.8em;
`;

const Logo = styled('img')`
    max-width: 315px;
    width: 100%;
`;

const DateText = styled('div')`
    padding-bottom: 0.5em;
`;

export default () => (
    <Container>
        <LandingContent>
            <Logo src={LogoImage} />
            <DateText>October 13th - 14th, 2018</DateText>
            <Button
                background="#5c5299"
                selectedBackground="#463f73"
                href="https://hackduke.org/apply/"
            >
                Sign up
            </Button>
        </LandingContent>
    </Container>
);
