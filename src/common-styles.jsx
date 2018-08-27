import { css } from 'emotion';

export const SectionBase = props => css`
    max-width: 1366px;
    margin: auto;
    height: ${props.height};
    background-repeat: no-repeat;
    background-position: center top;
    padding-left: 140px;
    background-size: 1366px ${props.height};

    @media screen and (max-width: 1380px) {
        background-position: left top;
    }
`;
