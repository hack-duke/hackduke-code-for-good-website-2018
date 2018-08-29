import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import {
    SectionBase,
    SectionContent,
    SectionLeftColumn,
    SectionRightColumn,
    SectionTextContent,
    SectionTitle
} from '../common-styles';

import TracksLine from './tracks-line.svg';
import TrackCard from './TrackCard';

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

const TrackRow = styled('div')`
    display: flex;
`;

export default () => (
    <Container>
        <Title>Tracks</Title>
        <SectionContent columns={true}>
            <SectionLeftColumn>
                <SectionTextContent>
                    HackDuke emphasizes its commitment to social good through
                    four unique project tracks. Tracks enable members to
                    collaborate while providing an alleyway to partnership with
                    peers, local organizations, nonprofits and universities to
                    continue working towards the cause.
                </SectionTextContent>
                <SectionTextContent>
                    Select a track for more info!
                </SectionTextContent>
            </SectionLeftColumn>
            <SectionRightColumn>
                <TrackRow>
                    <TrackCard color="#3549A2" title="Inequality">
                        The <b>Inequality</b> track targets problems regarding
                        both social and economic inequality. Whether it is
                        creating solutions to bridge the gap between the
                        affluent and the poor, or finding ways to eliminate
                        disparities in gender or race, this track is built on
                        the principle that everyone should have the capacity to
                        reach their full potential.
                    </TrackCard>
                    <TrackCard color="#5C5299" title="Energy">
                        The <b>Energy</b> track encompasses a technical
                        perspective to deal with large issues impacting energy
                        use, allocation and environmental regulations. This
                        track has many applications, including machine learning
                        for resource extraction, the use of green energy and
                        enforcing environmental policy.
                    </TrackCard>
                </TrackRow>
                <TrackRow>
                    <TrackCard color="#D25C59" title="Health">
                        The <b>Healthcare</b> track allows hackers to work with
                        various kinds of health related data, as well as connect
                        with mentors from the intersection of health and
                        technology. More than ever, technology today is in a
                        prime position to improve the quality, efficiency, and
                        accessibility of health care.
                    </TrackCard>
                    <TrackCard color="#FFAA5B" title="Education">
                        The <b>Education</b> track teams hackers with educators,
                        reaching out to all levels of subjects and skills. In
                        addition to Education events sponsored by HackDuke,
                        projects aim to increase visibility of technology and to
                        introduce basic skills to the public.
                    </TrackCard>
                </TrackRow>
            </SectionRightColumn>
        </SectionContent>
    </Container>
);
