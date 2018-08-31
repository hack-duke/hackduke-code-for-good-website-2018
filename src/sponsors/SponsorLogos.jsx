import React from 'react';
import styled from 'react-emotion';

import AppianLogo from './img/appian.png';
import ScimedLogo from './img/scimed.png';
import WolframLogo from './img/wolfram.svg';

import FuquaLogo from './img/fuqua.png';
import PrattLogo from './img/pratt.png';
import IIDLogo from './img/iid.png';

import GlobalBankersLogo from './img/gbankers.png';
import FifteenSeventeenLogo from './img/1517.png';

const LogoRow = styled('div')`
    display: flex;

    @media screen and (min-width: 400px) {
        padding-bottom: 15px;
    }

    @media screen and (min-width: 640px) {
        padding-bottom: 60px;
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
    margin: 8px;
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
            <Logo
                src={GlobalBankersLogo}
                href="https://www.globalbankers.com/"
            />
            <Logo src={FifteenSeventeenLogo} href="http://www.1517fund.com/" />
        </LogoRow>
    </React.Fragment>
);
