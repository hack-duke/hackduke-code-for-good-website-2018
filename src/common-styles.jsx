import { css } from 'emotion';
import styled from 'react-emotion';

export const MAX_WIDTH = '1400px';

export const PrimaryFont = css`
    font-family: 'Inconsolata', monospace;
`;
export const TitleFont = css`
    font-family: 'Larsseit', sans-serif;
`;

export const SecondaryText = css`
    ${PrimaryFont};
    color: #2b2b2b;
`;

export const SectionBase = props => css`
    max-width: ${MAX_WIDTH};
    margin: auto;
    position: relative;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;

    :first-child {
        padding-top: 0;
    }

    background-repeat: no-repeat;
    background-size: contain;
    background-position: right top, right bottom;
    background-image: ${props.mobileBackgroundImage || 'none'};

    @media screen and (min-width: 640px) {
        min-height: ${props.heightPx}px;

        background-image: ${props.backgroundImage};
        background-size: ${MAX_WIDTH} ${props.heightPx}px
            ${props.extHeightPx && `, ${MAX_WIDTH} ${props.extHeightPx}px`};
        background-position: left top, left ${props.heightPx - 1}px;

        padding-left: 144px;
        padding-right: 144px;
        padding-top: 87.5px;
    }

    @media screen and (min-width: ${MAX_WIDTH}) {
        background-position: center top, center ${props.heightPx - 1}px;
    }
`;

export const LeftContentPadding = css`
    @media screen and (min-width: 640px) {
        padding-left: 20px;
    }
`;

export const SectionTextContent = styled('p')`
    ${SecondaryText};
    font-size: 1.33em;
    margin-top: 0;
`;

const FlexProps = css`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1260px) {
        flex-direction: row;
    }
`;

export const SectionContent = styled('div')`
    ${LeftContentPadding};
    ${props => props.columns && FlexProps};
    margin-top: 25px;
`;

export const SectionLeftColumn = styled('div')`
    @media screen and (min-width: 1260px) {
        width: 285px;
    }
`;

export const SectionRightColumn = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
    padding-top: 20px;

    @media screen and (min-width: 640px) {
        padding-top: 40px;
    }

    @media screen and (min-width: 1260px) {
        padding-top: 0;
        padding-left: 40px;
    }
`;

// Optimized shadow rendering
// See https://alligator.io/css/transition-box-shadows/
export const ShadowItem = css`
    position: relative;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 12.5px 40px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    transition: transform 0.2s, opacity 0.2s, background-color 0.2s;
    -webkit-tap-highlight-color: transparent;

    ::after {
        position: absolute;
        content: '';
        border-radius: 5px;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.07);
        opacity: 0;
        transition: opacity 0.2s;
    }

    :hover {
        @media screen and (min-width: 640px) {
            transform: translateY(-4px);
        }
    }

    :hover::after {
        opacity: 1;
    }
`;

export const HideOnMobile = css`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }
`;
