import { css } from 'emotion';

export const SectionBase = props => css`
    max-width: 1366px;
    margin: auto;
    height: ${props.height};
    background-repeat: no-repeat;
    background-position: center top;
    padding: 0 144px;
    background-size: 1366px ${props.height};

    @media screen and (max-width: 1380px) {
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
