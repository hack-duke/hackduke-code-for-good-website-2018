import React from 'react';
import styled from 'react-emotion';

import Graphic from './tracks.svg';

const Wrapper = styled('div')`
    position: absolute;
    width: 720px;
    right: 0;
    top: 100px;
`;

export default class TracksGraphic extends React.Component {
    static defaultProps = {
        onMoreClick: () => {}
    };

    onCaptureGraphicRef = ref => {
        ref.addEventListener('load', () => {
            const svgElement = ref.contentDocument.documentElement;
            svgElement
                .getElementById('inequality-more')
                .addEventListener('click', () =>
                    this.props.onMoreClick('inequality')
                );
            svgElement
                .getElementById('energy-more')
                .addEventListener('click', () =>
                    this.props.onMoreClick('energy')
                );
            svgElement
                .getElementById('health-more')
                .addEventListener('click', () =>
                    this.props.onMoreClick('health')
                );
            svgElement
                .getElementById('education-more')
                .addEventListener('click', () =>
                    this.props.onMoreClick('education')
                );
        });
    };

    componentDidUpdate() {
        const { graphicRef } = this.state;
    }

    render() {
        return (
            <Wrapper>
                <object
                    data={Graphic}
                    type="image/svg+xml"
                    ref={this.onCaptureGraphicRef}
                />
            </Wrapper>
        );
    }
}
