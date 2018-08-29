import { css } from 'emotion';
import styled from 'react-emotion';

const MAX_WIDTH = '1400px';

export const PrimaryFont = css`
    font-family: 'Inconsolata', monospace;
`;

export const SecondaryText = css`
    ${PrimaryFont};
    text-align: justify;
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
`;

const FlexProps = css`
    display: flex;
    flex-direction: row;
`;

export const SectionContent = styled('div')`
    ${LeftContentPadding};
    ${props => props.columns && FlexProps};
`;

export const SectionLeftColumn = styled('div')`
    width: 420px;
`;

export const SectionRightColumn = styled('div')`
    padding-left: 10px;
    background-color: red;
    flex-grow: 1;
`;
