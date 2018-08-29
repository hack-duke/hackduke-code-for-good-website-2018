import { css } from 'emotion';

const MAX_WIDTH = '1400px';

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

export const SectionContent = css`
    font-family: 'Inconsolata', monospace;
    padding-left: 20px;
    display: inline-block;
`;

export const SectionTitle = css`
    ${SectionContent};
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 3px;
`;
