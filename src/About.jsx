import React from 'react';
import styled from 'react-emotion';

import AboutLine from './img/ABOUTLINE.svg';

// clean up shit
const Container = styled('div')`
    max-width: 1366px;
    margin: auto;
    height: 900px;
    background: url(${AboutLine});
    background-repeat: no-repeat;
    background-size: auto 900px;
    background-position: center top;
`;

export default class About extends React.Component {
    render() {
        return <Container>About here</Container>;
    }
}
