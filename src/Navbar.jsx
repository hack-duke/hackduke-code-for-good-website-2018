import React from 'react';

import styled from 'react-emotion';

import { HideOnMobile, TitleFont, ShadowBase } from './common-styles';

const navHeightPx = 54;
const fullShadowScrollOffset = 320;

const Nav = styled('div')`
    ${HideOnMobile};
    ${TitleFont};
    ${ShadowBase(0.05)};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${navHeightPx}px;
    background-color: white;
    z-index: 64;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    :after {
        position: fixed;
        content: '';
        top: 0;
        width: 100%;
        height: ${navHeightPx}px;
        z-index: -1;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.075);
        opacity: ${props => props.shadowOpacity};
    }
`;

const Spacer = styled('div')`
    ${HideOnMobile};
    height: ${navHeightPx}px;
`;

export default class Navbar extends React.PureComponent {
    state = { scrollOffset: 0 };

    componentDidMount() {
        this.updateScrollOffset();
        window.addEventListener('scroll', this.updateScrollOffset);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateScrollOffset);
    }

    render() {
        const { scrollOffset } = this.state;
        return (
            <React.Fragment>
                <Nav shadowOpacity={scrollOffset / fullShadowScrollOffset} />
                <Spacer />
            </React.Fragment>
        );
    }

    updateScrollOffset = () =>
        this.setState({
            scrollOffset: Math.min(window.scrollY, fullShadowScrollOffset)
        });
}
