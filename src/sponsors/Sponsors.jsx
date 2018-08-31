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
import SponsorLogos from './SponsorLogos';

const Container = styled('div')`
    ${SectionBase({ heightPx: 800 })}
    background-image: url(${SponsorsLine});
    padding-top: 90px;
    padding-bottom: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #f8aa5b;
`;

export default () => (
    <Container>
        <Title>Sponsors</Title>
        <SectionContent columns={true}>
            <SectionLeftColumn>
                <SectionTextContent>
                    A big thank you to all of our sponsors!
                </SectionTextContent>
                <SectionTextContent>
                    Interested in sponsoring?
                </SectionTextContent>
                <Button
                    background="#f8aa5b"
                    selectedBackground="#CC8849"
                    href="mailto:sponsorship@hackduke.org"
                >
                    Sponsor us
                </Button>
            </SectionLeftColumn>
            <SectionRightColumn>
                <SponsorLogos />
            </SectionRightColumn>
        </SectionContent>
    </Container>
);
