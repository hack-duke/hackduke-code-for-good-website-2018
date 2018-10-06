import React from 'react';
import styled from 'react-emotion';

import Home from './home-bg.svg';
import HomeMobileTop from './home-bg-mobile-top.svg';
import HomeMobileBottom from './home-bg-mobile-bottom.svg';
import LogoImage from './hackduke-logo.svg';

import { SectionBase, SecondaryText } from '../common-styles';
import { PURPLE_PRESSABLE } from '../materials';
import Button from '../Button';

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
  margin: auto 0;
  width: 100%;
  padding-bottom: 40px;

  @media screen and (min-width: 640px) {
    margin: 0;
    padding-top: 122px;
    padding-bottom: 0;
  }
`;

const Logo = styled('img')`
  width: 100%;
  margin-bottom: 1.5em;
  display: block;

  @media screen and (min-width: 480px) {
    max-width: 315px;
  }
`;

const DateText = styled('div')`
  padding-bottom: 1.5em;
`;

export default ({ id }) => (
  <Container id={id}>
    <LandingContent>
      <DateText>October 13th - 14th, 2018</DateText>
      <Logo alt="HackDuke: Code for Good" src={LogoImage} />
      <Button material={PURPLE_PRESSABLE} href="https://hackduke.org/apply/">
        Apply now
      </Button>
    </LandingContent>
  </Container>
);
