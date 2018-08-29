import React from 'react';
import styled from 'react-emotion';

import Home from './home-bg.svg';
import LogoImage from './hackduke-logo.png';

import { SectionBase } from '../common-styles';

const Container = styled('div')`
    ${SectionBase({ height: '900px' })}
    background-image: url(${Home});
`;

const LandingContent = styled('div')`
    padding-top: 140px;
    font-family: 'Inconsolata';
    font-size: 1.5em;
    line-height: 1.8em;
`;

const Logo = () => <img src={LogoImage} height="270px" />;

const SignupButton = styled('a')`
    background: #5c5299;
    padding: 0 16px;
    color: white;
    display: inline-block;
    margin-top: 8px;
    text-decoration: none;
`;

export default () => (
    <Container>
        <LandingContent>
            <Logo />
            <div>October 19th - 21st</div>
            <SignupButton href="https://duke.edu/">SIGN UP</SignupButton>
        </LandingContent>
    </Container>
);
