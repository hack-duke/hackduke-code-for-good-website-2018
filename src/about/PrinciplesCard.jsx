import React from 'react';
import styled from 'react-emotion';

const CardBase = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
    height: 500px;
    margin-right: 20px;
    border-radius: 8px;
    padding: 35px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 12.5px 40px rgba(0, 0, 0, 0.07);

    :last-child {
        margin-right: 0;
    }
`;

const CardTitle = styled('span')`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
    text-transform: uppercase;
`;

export default ({ title }) => (
    <CardBase>
        <CardTitle>{title}</CardTitle>
    </CardBase>
);
