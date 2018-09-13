import React from 'react';
import styled from 'react-emotion';

import AppianLogo from './img/appian.png';
import ScimedLogo from './img/scimed.png';
import WolframLogo from './img/wolfram.svg';

import FuquaLogo from './img/fuqua.png';
import PrattLogo from './img/pratt.png';
import IIDLogo from './img/iid.png';

import GlobalBankersLogo from './img/gbankers.png';
import CapitalOneLogo from './img/capital-one.svg';
import EquitasLogo from './img/equitas-logo.png';

import MicrosoftLogo from './img/microsoft.svg';
import OptumLogo from './img/optum-logo.svg';

const LogoRow = styled('div')`
    display: flex;

    @media screen and (min-width: 400px) {
        padding-bottom: 15px;
    }

    @media screen and (min-width: 640px) {
        padding-bottom: 30px;
    }

    :last-child {
        padding-bottom: 0;
    }
`;

const LogoWrapper = styled('a')`
    flex-grow: 1;
    flex-basis: 0;
    height: 108px;
    text-align: center;
    display: inline-block;
    background-image: url(${props => props.backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-origin: content-box;
    padding: 12px;
    padding-top: 0;
`;

const Logo = ({ src, href }) => (
    <LogoWrapper
        href={href}
        target="_blank"
        rel="noopener"
        backgroundImage={src}
    />
);

export default () => (
    <React.Fragment>
        <LogoRow>
            <Logo
                src={AppianLogo}
                href="https://careers.appian.com/careers-campus/"
            />
            <Logo src={ScimedLogo} href="http://www.scimedsolutions.com/" />
            <Logo
                src={WolframLogo}
                href="http://www.wolfram.com/company/careers/students/"
            />
        </LogoRow>
        <LogoRow>
            <Logo src={FuquaLogo} href="https://www.fuqua.duke.edu/" />
            <Logo src={PrattLogo} href="https://pratt.duke.edu/" />
            <Logo src={IIDLogo} href="https://bigdata.duke.edu/" />
        </LogoRow>
        <LogoRow>
            <Logo src={CapitalOneLogo} href="https://campus.capitalone.com/" />
            <Logo src={OptumLogo} href="https://www.optum.com/" />
            <Logo
                src={MicrosoftLogo}
                href="https://careers.microsoft.com/us/en/students-and-graduates"
            />
        </LogoRow>
        <LogoRow>
            <Logo src={EquitasLogo} href="https://www.equitasls.com/" />
            <Logo
                src={GlobalBankersLogo}
                href="https://www.globalbankers.com/"
            />
        </LogoRow>
    </React.Fragment>
);
