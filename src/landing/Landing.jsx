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

const SignupButton = styled('a')`
    background: #5c5299;
    padding: 4px 24px;
    color: white;
    display: inline-block;
    margin-top: 8px;
    text-decoration: none;
    transition: all 0.2s;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.75em;
    font-weight: bold;
    ${ShadowItem};

    :hover {
        transform: scale(1.05);
        opacity: 0.9;
    }

    :active {
        opacity: 1;
        transform: scale(0.95);
        background: #463f73;
    }
`;

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
