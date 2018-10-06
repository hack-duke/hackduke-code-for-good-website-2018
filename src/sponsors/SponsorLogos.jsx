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

import StickerMuleLogo from './img/stickermule.svg';
import EpicLogo from './img/epic.png';
import ClincLogo from './img/clinc-logo.png';
import DukeCSLogo from './img/duke-cs-logo.svg';
import ZwelisLogo from './img/zwelis-logo.png';

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

const Logo = ({ alt, src, href }) => (
  <LogoWrapper href={href} target="_blank" rel="noopener">
    <LogoImage alt={alt} src={src} />
  </LogoWrapper>
);

export default () => (
  <React.Fragment>
    <LogoRow>
      <Logo
        alt="Appian"
        src={AppianLogo}
        href="https://careers.appian.com/careers-campus/"
      />
      <Logo
        alt="Wolfram"
        src={WolframLogo}
        href="http://www.wolfram.com/company/careers/students/"
      />
      <Logo src={GoogleLogo} href="https://careers.google.com/students/" />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Facebook"
        src={FacebookLogo}
        href="https://www.facebook.com/careers/students-and-grads/"
      />
      <Logo alt="Optum" src={OptumLogo} href="https://www.optum.com/" />
      <Logo
        alt="Microsoft"
        src={MicrosoftLogo}
        href="https://careers.microsoft.com/us/en/students-and-graduates"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Palantir"
        src={PalantirLogo}
        href="https://www.palantir.com/students/"
      />
      <Logo
        alt="Capital One"
        src={CapitalOneLogo}
        href="https://campus.capitalone.com/"
      />
      <Logo alt="Equitas" src={EquitasLogo} href="https://www.equitasls.com/" />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Global Bankers"
        src={GlobalBankersLogo}
        href="https://www.globalbankers.com/"
      />
      <Logo alt="Epic" src={EpicLogo} href="https://careers.epic.com/" />
      <Logo
        alt="StickerMule"
        src={StickerMuleLogo}
        href="https://www.stickermule.com/uses/laptop-stickers?utm_source=sponsorship&utm_campaign=mlh-sponsorship&utm_medium=referral?utm_source=Direct"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="SciMed Solutions"
        src={ScimedLogo}
        href="http://www.scimedsolutions.com/"
      />
      <Logo alt="Clinc" src={ClincLogo} href="https://clinc.com/" />
      <Logo alt="Zweli's" src={ZwelisLogo} href="https://www.zwelis.com/" />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Innovation Co-Lab"
        src={InnovationCoLabLogo}
        href="https://colab.duke.edu/"
      />
      <Logo
        alt="Duke Computer Science"
        src={DukeCSLogo}
        href="https://www.cs.duke.edu/"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Fuqua School of Business"
        src={FuquaLogo}
        href="https://www.fuqua.duke.edu/"
      />
      <Logo
        alt="Pratt School of Engineering"
        src={PrattLogo}
        href="https://pratt.duke.edu/"
      />
      <Logo
        alt="Information Initiative at Duke"
        src={IIDLogo}
        href="https://bigdata.duke.edu/"
      />
    </LogoRow>
  </React.Fragment>
);
