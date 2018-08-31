import { css } from 'emotion';
import styled from 'react-emotion';

const MAX_WIDTH = '1400px';

export const PrimaryFont = css`
    font-family: 'Inconsolata', monospace;
`;
export const TitleFont = css`
    font-family: 'Open Sans', sans-serif;
`;

export const SecondaryText = css`
    ${PrimaryFont};
`;

export const SectionBase = props => css`
    max-width: ${MAX_WIDTH};
    margin: auto;
    min-height: ${props.heightPx}px;
    background-repeat: no-repeat;
    background-position: center top, center ${props.heightPx - 1}px;
    padding: 0 144px;
    background-size: ${MAX_WIDTH} ${props.heightPx}px
        ${props.extHeightPx && `, ${MAX_WIDTH} ${props.extHeightPx}`};
    position: relative;

    @media screen and (max-width: ${MAX_WIDTH}) {
        background-position: left top, left ${props.heightPx - 1}px;
    }
`;

const LeftContentPadding = css`
    padding-left: 20px;
`;

export const SectionTitle = css`
    ${TitleFont};
    ${LeftContentPadding};
    font-size: 2.5em;
    font-weight: bold;
`;

export const SectionTextContent = styled('p')`
    ${SecondaryText};
    font-size: 1.33em;
    color: #3b3e6e;
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
    padding-top: 40px;

    @media screen and (min-width: 1260px) {
        padding-top: 0;
        padding-left: 40px;
    }
`;

export const ShadowItem = css`
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 12.5px 40px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    transition: all 0.2s;

    :hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
            0 24px 60px rgba(0, 0, 0, 0.15);
        transform: translateY(-4px);
    }
`;
