import React from 'react';

import Landing from './landing/Landing';
import About from './about/About';
import Tracks from './tracks/Tracks';
import FAQs from './faqs/FAQs';
import Sponsors from './sponsors/Sponsors';

export default () => (
    <React.Fragment>
        <Landing />
        <About />
        <Tracks />
        <FAQs />
        <Sponsors />
    </React.Fragment>
);
