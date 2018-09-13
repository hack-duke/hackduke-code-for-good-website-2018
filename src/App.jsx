import React from 'react';

import Navbar from './Navbar';
import Landing from './landing/Landing';
import About from './about/About';
import Tracks from './tracks/Tracks';
import FAQs from './faqs/FAQs';
import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

const sections = [
    {
        title: 'Welcome',
        titleColor: '#5c5299',
        Component: Landing
    },
    {
        title: 'About',
        titleColor: '#3a3d6d',
        Component: About
    },
    {
        title: 'Tracks',
        titleColor: '#5f76cb',
        Component: Tracks
    },
    {
        title: 'FAQs',
        titleColor: '#f16a43',
        Component: FAQs
    },
    {
        title: 'Sponsors',
        titleColor: '#f8aa5b',
        Component: Sponsors
    }
];

export default () => (
    <React.Fragment>
        <Navbar navItems={sections} />
        {sections.map(({ title, titleColor, Component }) => (
            <Component
                id={title.toLowerCase()}
                key={title}
                titleColor={titleColor}
            />
        ))}
        <Footer />
    </React.Fragment>
);
