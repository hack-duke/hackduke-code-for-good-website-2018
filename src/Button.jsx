import styled from 'react-emotion';

import { ShadowItem, TitleFont } from './common-styles';

export default styled('a')`
    ${TitleFont};
    background: ${props => props.background};
    padding: 12px 24px;
    color: white;
    display: inline-block;
    margin-top: 8px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s;
    /* Todo fix this */
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    ${ShadowItem};

    transition: all 0.2s;

    :hover {
        transform: scale(1.05);
        opacity: 0.9;
    }

    :active {
        opacity: 1;
        transform: scale(0.95);
        background: ${props => props.selectedBackground};
    }
`;
