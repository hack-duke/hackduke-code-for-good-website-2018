import React from 'react';

import Navbar from './Navbar';
import Landing from './landing/Landing';
import About from './about/About';
import Tracks from './tracks/Tracks';
import FAQs from './faqs/FAQs';
import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

export default class App extends React.Component {
    sections = [
        {
            title: 'Welcome',
            color: '#5c5299',
            Component: Landing
        },
        {
            title: 'About',
            color: '#3a3d6d',
            Component: About
        },
        {
            title: 'Tracks',
            color: '#5f76cb',
            Component: Tracks
        },
        {
            title: 'FAQs',
            color: '#f16a43',
            Component: FAQs
        },
        {
            title: 'Sponsors',
            color: '#f8aa5b',
            Component: Sponsors
        }
    ];

    render() {
        return (
            <React.Fragment>
                <Navbar navItems={this.sections} />
                {this.sections.map(({ title, Component }) => (
                    <Component key={title} id={title.toLowerCase()} />
                ))}
                <Footer />
            </React.Fragment>
        );
    }
}
