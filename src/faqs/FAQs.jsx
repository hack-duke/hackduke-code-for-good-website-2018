import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionContent, SectionTitle } from '../common-styles';

import FAQsLine from './faqs-line.svg';
import FAQsLineExt from './faqs-line-ext.svg';
import FAQItem from './FAQItem';

const Container = styled('div')`
    ${SectionBase({
        heightPx: 600,
        extHeightPx: 4096,
        backgroundImage: `url(${FAQsLine}), url(${FAQsLineExt})`
    })};
    padding-top: 90px;
`;

const Title = styled('div')`
    ${SectionTitle};
    color: #f16a43;
`;

const FAQContainer = styled('div')`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1260px) {
        flex-direction: row;
    }
`;

const FAQColumn = styled('div')`
    flex-grow: 1;
    flex-basis: 0;

    @media screen and (min-width: 1260px) {
        margin-right: 25px;

        :last-child {
            margin-right: 0;
        }
    }
`;

const SponsorshipLink = styled('a')`
    text-decoration: underline;
    color: black !important;
`;

export default () => (
    <Container>
        <Title>FAQs</Title>
        <SectionContent>
            <FAQContainer>
                <FAQColumn>
                    <FAQItem title="Prizes?">
                        Yes, but there's a little twist! The grand prizes are
                        donations under your name to charities and causes! There
                        will be grand prize winners for each track, novice track
                        and many other company sponsored API prizes as well.
                    </FAQItem>
                    <FAQItem title="When? Where?">
                        HackDuke starts Saturday, October 13th at 10:00 AM EST
                        and ends on Sunday, October 14th at 5:30 PM EST. It is
                        hosted on Duke University's West Campus, in and around
                        the Fitzpatrick Engineering Building, Durham, NC 27705.
                    </FAQItem>
                    <FAQItem title="Who can participate?">
                        You can participate as long as you're a student
                        (undergraduate or graduate)! If you're a new grad, we'd
                        love to have you too.
                    </FAQItem>
                </FAQColumn>
                <FAQColumn>
                    <FAQItem title="Who can I work with?">
                        Anyone! Get to know your fellow programmers better from
                        your own and other schools! The only request that we
                        have is that you make a new friend by talking to each
                        other, our mentors and our experts!
                    </FAQItem>
                    <FAQItem title="Anything I should remember to bring?">
                        Bring your own ethernet cables (or you can just use
                        WiFi) and bring any Nerf gun arsenal you have!
                    </FAQItem>
                    <FAQItem title="What can I make?">
                        We welcome all software and hardware hacks that align to
                        our tracks for impact. We will also have lab space for
                        hardware hackers.
                    </FAQItem>
                </FAQColumn>
                <FAQColumn>
                    <FAQItem title="I want to volunteer or mentor! How can I help?">
                        To help with logistics day of, sign up to volunteer. If
                        you're looking to mentor hackers with tech or track
                        knowledge, come help out as a mentor. Both mentors and
                        volunteers will get a special HackDuke T-shirt! (We are
                        working on setting up the forms.)
                    </FAQItem>
                    <FAQItem title="Travel?">
                        Anyone from across the nation is welcome to come! We
                        will be providing buses for certain universities. Travel
                        reimbursements will be provided in case by case
                        scenarios.
                    </FAQItem>
                    <FAQItem title="How can I become a sponsor?">
                        Email us at{' '}
                        <SponsorshipLink href="mailto:sponsorship@hackduke.org">
                            sponsorship@hackduke.org
                        </SponsorshipLink>
                        .
                    </FAQItem>
                </FAQColumn>
            </FAQContainer>
        </SectionContent>
    </Container>
);
