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
`;

const CenterContent = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
`;

const RightLogo = styled('img')`
    height: 80px;
    align-self: center;
`;

export default () => (
    <FooterContainer>
        <LeftBadge src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" />
        <CenterContent />
        <RightLogo src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.svg" />
    </FooterContainer>
);
