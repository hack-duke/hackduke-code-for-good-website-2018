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

const SocialLinks = styled('div')`
    margin: auto;
    padding-bottom: 12px;
    width: 300px;
`;

const iconStyle = {
    style: { fontSize: '32px', margin: '0 8px', color: 'white' }
};

export default () => (
    <FooterContainer>
        <LeftBadge src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" />
        <CenterContainer>
            <CenterContent>
                <SocialLinks>
                    <a
                        href="mailto:hackers@hackduke.org"
                        class="icon-mail-squared"
                        {...iconStyle}
                    />
                    <a
                        href="https://www.facebook.com/hackduke"
                        target="_blank"
                        rel="noopener"
                        class="icon-facebook-squared"
                        {...iconStyle}
                    />
                    <a
                        href="https://twitter.com/hackduke"
                        target="_blank"
                        rel="noopener"
                        class="icon-twitter-squared"
                        {...iconStyle}
                    />
                </SocialLinks>
                Copyright &copy; 2018 HackDuke.
            </CenterContent>
        </CenterContainer>
        <RightLogo src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.svg" />
    </FooterContainer>
);
