import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { TitleFont } from '../common-styles';

import {
    SectionBase,
    SectionContent,
    SectionLeftColumn,
    SectionRightColumn,
    SectionTextContent
} from '../common-styles';
import SectionTitle from '../SectionTitle';

import TracksLine from './tracks-line.svg';
import TracksLineExt from './tracks-line-ext.svg';
import TrackCard from './TrackCard';

import InequalityIcon from './icons/inequality.svg';
import EnergyIcon from './icons/energy.svg';
import HealthIcon from './icons/health.svg';
import EducationIcon from './icons/education.svg';

const Container = styled('div')`
    ${SectionBase({
        heightPx: 600,
        extHeightPx: 4096,
        backgroundImage: `url(${TracksLine}), url(${TracksLineExt})`
    })};
    position: relative;
`;

const TrackRow = styled('div')`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 960px) {
        flex-direction: row;
    }
`;

const TrackCTA = styled('a')`
    ${TitleFont};
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    margin-top: 15px;
    cursor: pointer;
    /* TODO: remove this hack */
    position: absolute;
    bottom: 25px;
    transition: opacity 0.2s;

    :hover {
        opacity: 0.8;
    }
`;

const iconTranslate = css`
    transform: translateY(0.033em);
    display: inline-block;
`;
const RightArrow = () => (
    <span className="icon-right-open" css={iconTranslate} />
);

export default ({ id, titleColor }) => (
    <Container id={id}>
        <SectionTitle titleColor={titleColor}>Tracks</SectionTitle>
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
                    <TrackCard
                        color="#3549A2"
                        title="Inequality"
                        icon={InequalityIcon}
                    >
                        The <b>Inequality</b> track targets problems regarding
                        both social and economic inequality. Whether it is
                        creating solutions to bridge the income gap, or finding
                        ways to reduce disparities in gender or race, this track
                        is built on the principle that everyone should have the
                        capacity to reach their full potential.
                        <TrackCTA
                            href="https://hackduke-2017.devpost.com/submissions/search?utf8=%E2%9C%93&filter%5Btrack%5D%5B%5D=poverty+and+inequality"
                            target="_blank"
                            rel="noopener"
                        >
                            See Projects <RightArrow />
                        </TrackCTA>
                    </TrackCard>
                    <TrackCard color="#5C5299" title="Energy" icon={EnergyIcon}>
                        The <b>Energy</b> track encompasses a technical
                        perspective to deal with large issues impacting energy
                        use, allocation and environmental regulations. This
                        track has many applications, including machine learning
                        for resource extraction, the use of green energy and
                        enforcing environmental policy.
                        <TrackCTA
                            href="https://hackduke-2017.devpost.com/submissions/search?utf8=%E2%9C%93&filter%5Btrack%5D%5B%5D=environment"
                            target="_blank"
                            rel="noopener"
                        >
                            See Projects <RightArrow />
                        </TrackCTA>
                    </TrackCard>
                </TrackRow>
                <TrackRow>
                    <TrackCard color="#D25C59" title="Health" icon={HealthIcon}>
                        The <b>Health</b> track allows hackers to work with
                        various kinds of health related data, as well as connect
                        with mentors from the intersection of health and
                        technology. More than ever, technology today is in a
                        prime position to improve the quality, efficiency, and
                        accessibility of health care.
                        <TrackCTA
                            href="https://hackduke-2017.devpost.com/submissions/search?utf8=%E2%9C%93&filter%5Btrack%5D%5B%5D=health+and+wellness"
                            target="_blank"
                            rel="noopener"
                        >
                            See Projects <RightArrow />
                        </TrackCTA>
                    </TrackCard>
                    <TrackCard
                        color="#FFAA5B"
                        title="Education"
                        icon={EducationIcon}
                    >
                        The <b>Education</b> track pairs hackers with educators,
                        reaching out to all levels of subjects and skills. In
                        addition to Education events sponsored by HackDuke,
                        projects aim to increase visibility of technology and to
                        introduce basic skills to the public.
                        <TrackCTA
                            href="https://hackduke-2017.devpost.com/submissions/search?utf8=%E2%9C%93&filter%5Btrack%5D%5B%5D=education"
                            target="_blank"
                            rel="noopener"
                        >
                            See Projects <RightArrow />
                        </TrackCTA>
                    </TrackCard>
                </TrackRow>
            </SectionRightColumn>
        </SectionContent>
    </Container>
);
