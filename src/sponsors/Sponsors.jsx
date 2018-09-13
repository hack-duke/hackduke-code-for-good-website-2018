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
import Divider from '../Divider';

import SponsorsLine from './sponsors-line.svg';
import SponsorLogos from './SponsorLogos';

const Container = styled('div')`
    ${SectionBase({
        heightPx: 800,
        backgroundImage: `url(${SponsorsLine})`
    })};
    padding-bottom: 90px;
`;

const titleColor = '#f8aa5b';

const Title = styled('div')`
    ${SectionTitle};
    color: #2b2b2b;

    @media screen and (min-width: 640px) {
        color: ${titleColor};
    }
`;

export default ({ id }) => (
    <Container id={id}>
        <Title>Sponsors</Title>
        <Divider color={titleColor} hideOnDesktop={true} />
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
