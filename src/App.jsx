import React from 'react';

import Landing from './landing/Landing';
import About from './about/About';
import Tracks from './tracks/Tracks';
import Schedule from './schedule/Schedule';
import FAQs from './faqs/FAQs';
import Sponsors from './sponsors/Sponsors';

export default () => (
    <React.Fragment>
        <Landing />
        <About />
        <Tracks />
        <Schedule />
        <FAQs />
        <Sponsors />
    </React.Fragment>
);
