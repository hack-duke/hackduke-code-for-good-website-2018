import styled from 'react-emotion';

export default styled('div')`
  width: 40px;
  height: 6px;
  background-color: ${props => props.color};
  margin: 15px 0;

  @media screen and (min-width: ${props => props.maxDisplayWidth || 640}px) {
    display: ${props => (props.hideOnDesktop ? 'none' : 'auto')};
  }
`;
