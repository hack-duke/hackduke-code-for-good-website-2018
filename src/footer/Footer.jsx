import React from 'react';
import styled from 'react-emotion';
import { cx, css } from 'emotion';

import { TitleFont, HideOnMobile, MAX_WIDTH } from '../common-styles';

const FooterContainer = styled('div')`
    display: block;
    background-color: #3a3d6d;
    display: flex;
    flex-direction: row;
    height: 225px;
    padding: 0;
`;

const MLHBadge = styled('a')`
    width: 100px;
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
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    padding: 0 144px;
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
    text-decoration: none;

    :hover {
        opacity: 0.8;
    }
`;

const year = new Date().getFullYear();

export default () => (
    <FooterContainer>
        <CenterContainer>
            <CenterContent>
                <SocialLinks>
                    <a
                        href="mailto:hackers@hackduke.org"
                        className={cx(iconStyle, 'icon-mail-squared')}
                    />
                    <a
                        href="https://www.facebook.com/hackduke"
                        target="_blank"
                        rel="noopener"
                        className={cx(iconStyle, 'icon-facebook-squared')}
                    />
                    <a
                        href="https://twitter.com/hackduke"
                        target="_blank"
                        rel="noopener"
                        className={cx(iconStyle, 'icon-twitter-squared')}
                    />
                </SocialLinks>
                Copyright &copy; {year} HackDuke.
            </CenterContent>
            <MLHBadge
                href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
                target="_blank"
                rel="noopener"
            >
                <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" />
            </MLHBadge>
        </CenterContainer>
    </FooterContainer>
);
