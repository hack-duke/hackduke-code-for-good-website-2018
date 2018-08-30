import React from 'react';
import styled from 'react-emotion';

import Home from './home-bg.svg';
import LogoImage from './hackduke-logo.png';

import { PrimaryFont, SectionBase, ShadowItem } from '../common-styles';
import Button from '../Button';

const Container = styled('div')`
    ${SectionBase({ height: '900px' })}
    background-image: url(${Home});
`;

const LandingContent = styled('div')`
    ${PrimaryFont};
    padding-top: 140px;
    font-size: 1.5em;
    line-height: 1.8em;
`;

const Logo = () => <img src={LogoImage} height="270px" />;

export default () => (
    <Container>
        <LandingContent>
            <Logo />
            <div>October 13th - 14th</div>
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
