import styled from 'react-emotion';

export default styled('div')`
    width: 40px;
    height: 8px;
    background-color: ${props => props.color};
    margin: 15px 0;
`;
