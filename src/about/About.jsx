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

import AboutLine from './about-line.svg';
import PrinciplesCard from './PrinciplesCard';

const Container = styled('div')`
    ${SectionBase({ height: '800px' })}
    background-image: url(${AboutLine});
    padding-top: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #3a3d6d;
`;

const PrinciplesContainer = styled('div')`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`;

export default () => (
    <Container>
        <Title>About</Title>
        <SectionContent>
            <SectionTextContent>
                HackDuke isn't your typical hackathon: it's driven by a set of
                guiding principles that aim to make every hacker feel welcome,
                regardless of their age, creed, or experience level. Through
                these, we hope to foster an environment that enables everyone to
                code for good. <b>(this text is a placeholder I made up)</b>
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
                    title="Use tech to further social good"
                    titleColor="#A94A64"
                >
                    The core principle behind hacking for social good is
                    collaboration, and HackDuke's project tracks provide an
                    avenue to collaborate with each other, with initiatives at
                    their university and with community organizations.
                </PrinciplesCard>
                <PrinciplesCard
                    title="Give back to the community"
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
