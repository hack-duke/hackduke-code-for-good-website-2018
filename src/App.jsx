import React from 'react';

import Landing from './Landing.jsx';
import About from './About.jsx';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Landing />
                <About />
            </React.Fragment>
        );
    }
}
