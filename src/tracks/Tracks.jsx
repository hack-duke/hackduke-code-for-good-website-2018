import React from 'react';
import styled from 'react-emotion';

import {
    SectionBase,
    SectionContent,
    SectionLeftColumn,
    SectionRightColumn,
    SectionTextContent,
    SectionTitle
} from '../common-styles';

import TracksLine from './tracks-line.svg';
import TracksGraphic from './TracksGraphic';

const Container = styled('div')`
    ${SectionBase({ height: '660px' })}
    background-image: url(${TracksLine});
    padding-top: 90px;
    position: relative;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #5f76cb;
    display: block;
`;

export default () => (
    <Container>
        <Title>Tracks</Title>
        <SectionContent>
            <SectionLeftColumn>
                <SectionTextContent>
                    HackDuke emphasizes its commitment to social good through
                    four unique project tracks. Tracks enable members to
                    collaborate while providing an alleyway to partnership with
                    peers, local organizations, nonprofits and universities to
                    continue working towards the cause.
                </SectionTextContent>
                <SectionTextContent>
                    select a line for more info!
                </SectionTextContent>
            </SectionLeftColumn>
            <SectionRightColumn />
        </SectionContent>
    </Container>
);
