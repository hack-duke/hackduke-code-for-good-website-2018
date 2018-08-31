import React from 'react';
import styled from 'react-emotion';

import {
    SectionBase,
    SectionContent,
    SectionTextContent,
    SectionTitle
} from '../common-styles';

import AboutLine from './about-line.svg';
import AboutLineExt from './about-line-ext.svg';
import PrinciplesCard from './PrinciplesCard';

const Container = styled('div')`
    ${SectionBase({
        heightPx: 600,
        extHeightPx: 4096,
        backgroundImage: `url(${AboutLine}), url(${AboutLineExt})`
    })};
    padding-top: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #3a3d6d;
`;

const PrinciplesContainer = styled('div')`
    margin-top: 40px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1260px) {
        flex-direction: row;
    }
`;

export default () => (
    <Container>
        <Title>About</Title>
        <SectionContent>
            <SectionTextContent>
                HackDuke is the nation's premier hackathon for tech and social
                good. We unite students that are passionate about changing the
                intention and narrative behind how technology is used today to
                create meaningful hacks in a 24-hour sprint. Come learn, come
                discuss, and come code for good!
            </SectionTextContent>
            <PrinciplesContainer>
                <PrinciplesCard
                    title="Collaboration, not competition"
                    titleColor="#3649A3"
                >
                    HackDuke is not just about building meaningful projects.
                    It's also an open forum to discuss, share and bring to life
                    ideas that aim to make a positive impact on social issues.
                    Look forward to working with experts from non-profits and
                    coding alongside mentors from tech companies!
                </PrinciplesCard>
                <PrinciplesCard
                    title="Using tech to further social good"
                    titleColor="#A94A64"
                >
                    The core principle behind hacking for social good is
                    collaboration, and HackDuke's project tracks provide an
                    avenue to collaborate with each other, with initiatives at
                    their university and with community organizations.
                </PrinciplesCard>
                <PrinciplesCard
                    title="Giving back to the community"
                    titleColor="#FFAA5B"
                >
                    HackDuke encourages students to venture beyond the
                    classroom. Learn how your skills can be used to make a
                    difference in other people's lives. Tracks enable members to
                    collaborate while providing an alleyway to partnership with
                    peers, local organizations, nonprofits and universities to
                    continue working towards the cause.
                </PrinciplesCard>
            </PrinciplesContainer>
        </SectionContent>
    </Container>
);
