import React from 'react';
import styled from 'react-emotion';

import Home from './img/HOME.svg';

const Container = styled('div')`
    max-width: 1366px;
    margin: auto;
    height: 900px;
    background: url(${Home});
    background-repeat: no-repeat;
    background-size: auto 900px;
    background-position: center top;
`;

export default class Landing extends React.Component {
    render() {
        return <Container>Hello World</Container>;
    }
}
