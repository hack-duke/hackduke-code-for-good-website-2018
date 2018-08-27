import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
    height: 2000px;
`;

export default class About extends React.Component {
    render() {
        return <Container>About here</Container>;
    }
}
