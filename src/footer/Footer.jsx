import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { TitleFont, HideOnMobile } from '../common-styles';

const FooterContainer = styled('div')`
    display: block;
    background-color: #3a3d6d;
    display: flex;
    flex-direction: row;
    height: 225px;
    padding: 0;

    @media screen and (min-width: 640px) {
        padding: 0 80px;
    }
`;

const LeftBadge = styled('a')`
    width: 108px;
    padding-right: 16px;
    align-self: flex-start;
    ${HideOnMobile};

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const CenterContainer = styled('div')`
    ${TitleFont};
    font-weight: bold;
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    color: white;
`;

const RightLogo = styled('a')`
    width: 108px;
    align-self: center;
    ${HideOnMobile};

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const CenterContent = styled('div')`
    flex-grow: 1;
    align-self: center;
    text-align: center;
`;

const SocialLinks = styled('div')`
    margin: auto;
    padding-bottom: 12px;
    width: 300px;
`;

const iconStyle = css`
    font-size: 32px;
    margin: 0 8px;
    color: white;
    transition: opacity 0.2s;

    :hover {
        opacity: 0.8;
    }
`;

const year = new Date().getFullYear();

export default () => (
    <FooterContainer>
        <LeftBadge
            href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
            target="_blank"
            rel="noopener"
        >
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" />
        </LeftBadge>
        <CenterContainer>
            <CenterContent>
                <SocialLinks>
                    <a
                        href="mailto:hackers@hackduke.org"
                        className="icon-mail-squared"
                        css={iconStyle}
                    />
                    <a
                        href="https://www.facebook.com/hackduke"
                        target="_blank"
                        rel="noopener"
                        className="icon-facebook-squared"
                        css={iconStyle}
                    />
                    <a
                        href="https://twitter.com/hackduke"
                        target="_blank"
                        rel="noopener"
                        className="icon-twitter-squared"
                        css={iconStyle}
                    />
                </SocialLinks>
                Copyright &copy; {year} HackDuke.
            </CenterContent>
        </CenterContainer>
        <RightLogo href="https://mlh.io" target="_blank" rel="noopener">
            <img src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.svg" />
        </RightLogo>
    </FooterContainer>
);
