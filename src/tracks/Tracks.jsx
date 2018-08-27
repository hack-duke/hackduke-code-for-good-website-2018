import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionContent, SectionTitle } from '../common-styles';

import TracksLine from './tracks-line.svg';

const Container = styled('div')`
    ${SectionBase({ height: '800px' })}
    background-image: url(${TracksLine});
    padding-top: 90px;
    position: relative;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #5f76cb;
    display: block;
`;

const TracksParagraph = styled('div')`
    ${SectionContent};
    font-family: 'Inconsolata';
    font-size: 1.33em;
    margin-top: 20px;
    width: 420px;
    color: #3b3e6e;
    text-align: justify;
`;

export default () => (
    <Container>
        <Title>Tracks</Title>
        <TracksParagraph>
            <p>
                HackDuke emphasizes its commitment to social good through four
                unique project tracks. Tracks enable members to collaborate
                while providing an alleyway to partnership with peers, local
                organizations, nonprofits and universities to continue working
                towards the cause.
            </p>
            <p>select a line for more info!</p>
        </TracksParagraph>
    </Container>
);
