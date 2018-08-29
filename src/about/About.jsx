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
                <PrinciplesCard title="Collaboration, not competition" />
                <PrinciplesCard title="Use tech to further social good" />
                <PrinciplesCard title="Give back to the community" />
            </PrinciplesContainer>
        </SectionContent>
    </Container>
);
