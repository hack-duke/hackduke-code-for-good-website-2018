import { css } from 'emotion';
import styled from 'react-emotion';

const MAX_WIDTH = '1400px';

export const PrimaryFont = css`
    font-family: 'Inconsolata', monospace;
`;

export const SecondaryText = css`
    ${PrimaryFont};
`;

export const SectionBase = props => css`
    max-width: ${MAX_WIDTH};
    margin: auto;
    height: ${props.height};
    background-repeat: no-repeat;
    background-position: center top;
    padding: 0 144px;
    background-size: ${MAX_WIDTH} ${props.height};
    position: relative;

    @media screen and (max-width: ${MAX_WIDTH}) {
        background-position: left top;
    }
`;

const LeftContentPadding = css`
    padding-left: 20px;
`;

export const SectionTitle = css`
    ${PrimaryFont};
    ${LeftContentPadding};
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 3px;
`;

export const SectionTextContent = styled('p')`
    ${SecondaryText};
    display: inline-block;
    font-size: 1.33em;
    color: #3b3e6e;
    margin-top: 0;
`;

const FlexProps = css`
    display: flex;
    flex-direction: row;
`;

export const SectionContent = styled('div')`
    ${LeftContentPadding};
    ${props => props.columns && FlexProps};
    margin-top: 25px;
`;

export const SectionLeftColumn = styled('div')`
    width: 285px;
`;

export const SectionRightColumn = styled('div')`
    padding-left: 45px;
    flex-grow: 1;
    flex-basis: 0;
`;

export const ShadowItem = css`
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 12.5px 40px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    transition: all 0.2s;

    :hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
            0 24px 60px rgba(0, 0, 0, 0.07);
        transform: translateY(-4px);
    }
`;
