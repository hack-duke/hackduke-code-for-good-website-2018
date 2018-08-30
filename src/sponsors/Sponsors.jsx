import React from 'react';
import styled from 'react-emotion';

import {
    SectionBase,
    SectionContent,
    SectionTitle,
    SectionLeftColumn,
    SectionRightColumn,
    SectionTextContent
} from '../common-styles';
import Button from '../Button';

import SponsorsLine from './sponsors-line.svg';

const Container = styled('div')`
    ${SectionBase({ height: '800px' })}
    background-image: url(${SponsorsLine});
    padding-top: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #f8aa5b;
`;

const SponsorPlaceholder = styled('div')`
    height: 500px;
    width: 100%;
    background: #eee;
`;

export default () => (
    <Container>
        <Title>Sponsors</Title>
        <SectionContent columns={true}>
            <SectionLeftColumn>
                <SectionTextContent>
                    A big thank you to all our sponsors!
                </SectionTextContent>
                <SectionTextContent>
                    Interested in sponsoring?
                </SectionTextContent>
                <Button
                    background="#f8aa5b"
                    selectedBackground="#f8aa5b"
                    href="mailto:sponsorship@hackduke.org"
                >
                    Sponsor us
                </Button>
            </SectionLeftColumn>
            <SectionRightColumn>
                <SponsorPlaceholder />
            </SectionRightColumn>
        </SectionContent>
    </Container>
);
