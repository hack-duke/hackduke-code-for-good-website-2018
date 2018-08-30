import React from 'react';
import styled from 'react-emotion';

const FooterContainer = styled('div')`
    display: block;
    background-color: #3a3d6d;
    display: flex;
    flex-direction: row;
    height: 225px;
    padding: 0 80px;
`;

const LeftBadge = styled('img')`
    height: 180px;
    padding-right: 16px;
`;

const CenterContainer = styled('div')`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    font-family: 'Open Sans', sans-serif;
    color: white;
`;

const RightLogo = styled('img')`
    height: 50px;
    align-self: center;
`;

const CenterContent = styled('div')`
    flex-grow: 1;
    align-self: center;
    text-align: center;
`;

export default () => (
    <FooterContainer>
        <LeftBadge src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" />
        <CenterContainer>
            <CenterContent>Copyright &copy;2018 HackDuke.</CenterContent>
        </CenterContainer>
        <RightLogo src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.svg" />
    </FooterContainer>
);
