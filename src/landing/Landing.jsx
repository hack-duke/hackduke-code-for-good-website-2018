import React from 'react';
import styled from 'react-emotion';

import Home from './home-bg.svg';
import HomeMobileTop from './home-bg-mobile-top.svg';
import HomeMobileBottom from './home-bg-mobile-bottom.svg';
import LogoImage from './hackduke-logo.svg';

import { SectionBase, SecondaryText } from '../common-styles';
import Button from '../Button';
import Divider from '../Divider';

const Container = styled('div')`
    ${SectionBase({
        heightPx: 900,
        backgroundImage: `url(${Home})`,
        mobileBackgroundImage: `url(${HomeMobileTop}), url(${HomeMobileBottom})`
    })};
    display: flex;
    height: 100vh;

    @media screen and (min-width: 640px) {
        display: block;
        height: auto;
    }
`;

const LandingContent = styled('div')`
    ${SecondaryText};
    font-size: 1.5em;
    line-height: 1.8em;
    margin: auto 0;
    width: 100%;

    @media screen and (min-width: 640px) {
        margin: 0;
        padding-top: 140px;
    }
`;

const Logo = styled('img')`
    width: 100%;

    @media screen and (min-width: 480px) {
        max-width: 315px;
    }
`;

const DateText = styled('div')`
    padding-bottom: 0.33em;

    @media screen and (min-width: 480px) {
        padding-bottom: 0.5em;
    }
`;

export default ({ id }) => (
    <Container id={id}>
        <LandingContent>
            <Logo src={LogoImage} />
            <Divider color="#5c5299" />
            <DateText>October 13th - 14th, 2018</DateText>
            <Button
                background="#5c5299"
                selectedBackground="#463f73"
                href="https://hackduke.org/apply/"
            >
                Apply
            </Button>
        </LandingContent>
    </Container>
);
