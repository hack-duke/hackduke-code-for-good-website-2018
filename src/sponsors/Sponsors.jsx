import React from 'react';
import styled from 'react-emotion';

import {
    SectionBase,
    SectionContent,
    SectionLeftColumn,
    SectionRightColumn,
    SectionTextContent
} from '../common-styles';
import Button from '../Button';
import SectionTitle from '../SectionTitle';

import SponsorsLine from './sponsors-line.svg';
import SponsorLogos from './SponsorLogos';

const Container = styled('div')`
    ${SectionBase({
        heightPx: 800,
        backgroundImage: `url(${SponsorsLine})`
    })};
    padding-bottom: 90px;
`;

export default ({ id, titleColor }) => (
    <Container id={id}>
        <SectionTitle titleColor={titleColor}>Sponsors</SectionTitle>
        <SectionContent columns={true}>
            <SectionLeftColumn>
                <SectionTextContent>
                    A big thank you to all of our sponsors!
                </SectionTextContent>
                <SectionTextContent>
                    Interested in sponsoring?
                </SectionTextContent>
                <SectionTextContent>
                    <Button
                        background="#f8aa5b"
                        selectedBackground="#CC8849"
                        href="mailto:sponsorship@hackduke.org"
                    >
                        Sponsor us
                    </Button>
                </SectionTextContent>
            </SectionLeftColumn>
            <SectionRightColumn>
                <SponsorLogos />
            </SectionRightColumn>
        </SectionContent>
    </Container>
);
