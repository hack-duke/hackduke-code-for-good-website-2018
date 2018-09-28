import React from 'react';
import styled from 'react-emotion';

import AppianLogo from './img/appian-logo.svg';
import ScimedLogo from './img/scimed.png';
import WolframLogo from './img/wolfram.svg';

import FuquaLogo from './img/fuqua.png';
import PrattLogo from './img/pratt.png';
import IIDLogo from './img/iid.png';

import GlobalBankersLogo from './img/gbankers.png';
import CapitalOneLogo from './img/capital-one.svg';
import EquitasLogo from './img/equitas-logo.png';

import MicrosoftLogo from './img/microsoft-logo.svg';
import OptumLogo from './img/optum-logo.svg';
import InnovationCoLabLogo from './img/innovation-colab.png';

import FacebookLogo from './img/fb-family.svg';
import GoogleLogo from './img/google-logo.svg';
import PalantirLogo from './img/palantir-logo.svg';

const LogoRow = styled('div')`
  display: flex;
  padding-bottom: 15px;
  max-height: 108px;

  @media screen and (min-width: 480px) {
    padding-bottom: 25px;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 30px;
  }

  :last-child {
    padding-bottom: 0;
  }
`;

const LogoWrapper = styled('a')`
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-top: 0;
`;

const LogoImage = styled('img')`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  user-drag: none;
`;

const Logo = ({ src, href }) => (
  <LogoWrapper href={href} target="_blank" rel="noopener">
    <LogoImage src={src} />
  </LogoWrapper>
);

export default () => (
  <React.Fragment>
    <LogoRow>
      <Logo
        src={AppianLogo}
        href="https://careers.appian.com/careers-campus/"
      />
      <Logo
        src={WolframLogo}
        href="http://www.wolfram.com/company/careers/students/"
      />
      <Logo src={GoogleLogo} href="https://careers.google.com/students/" />
    </LogoRow>
    <LogoRow>
      <Logo
        src={FacebookLogo}
        href="https://www.facebook.com/careers/students-and-grads/"
      />
      <Logo src={OptumLogo} href="https://www.optum.com/" />

      <Logo
        src={MicrosoftLogo}
        href="https://careers.microsoft.com/us/en/students-and-graduates"
      />
    </LogoRow>
    <LogoRow>
      <Logo src={PalantirLogo} href="https://www.palantir.com/students/" />
      <Logo src={CapitalOneLogo} href="https://campus.capitalone.com/" />
      <Logo src={EquitasLogo} href="https://www.equitasls.com/" />
    </LogoRow>
    <LogoRow>
      <Logo src={GlobalBankersLogo} href="https://www.globalbankers.com/" />
      <Logo src={ScimedLogo} href="http://www.scimedsolutions.com/" />
      <Logo src={InnovationCoLabLogo} href="https://colab.duke.edu/" />
    </LogoRow>
    <LogoRow>
      <Logo src={FuquaLogo} href="https://www.fuqua.duke.edu/" />
      <Logo src={PrattLogo} href="https://pratt.duke.edu/" />
      <Logo src={IIDLogo} href="https://bigdata.duke.edu/" />
    </LogoRow>
  </React.Fragment>
);
