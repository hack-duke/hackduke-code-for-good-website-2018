import React from 'react';
import styled from 'react-emotion';

const LogoRow = styled('div')`
    display: flex;
    padding-bottom: 60px;
`;

const LogoWrapper = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
    height: 108px;
    text-align: center;
`;

const LogoImage = styled('img')`
    max-width: 100%;
    max-height: 100%;
    padding: 8px;
`;

const Logo = ({ src }) => (
    <LogoWrapper>
        <LogoImage src={src} />
    </LogoWrapper>
);

export default () => (
    <React.Fragment>
        <LogoRow>
            <Logo src="https://pbs.twimg.com/profile_images/796052901189730304/Dc5biqpQ_400x400.jpg" />
            <Logo src="https://www.metalsrecyclingevent.com/wp-content/uploads/Scimed.gif" />
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WolframCorporateLogo.svg/1200px-WolframCorporateLogo.svg.png" />
        </LogoRow>
        <LogoRow>
            <Logo src="https://yt3.ggpht.com/a-/ACSszfFriTbBsAy9cX28clgC74DdDoNJJnjwaZ1BCA=s900-mo-c-c0xffffffff-rj-k-no" />
            <Logo src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/2016_Logo_Edmund_T._Pratt_Jr._School_of_Engineering.jpeg/220px-2016_Logo_Edmund_T._Pratt_Jr._School_of_Engineering.jpeg" />
            <Logo src="https://yt3.ggpht.com/a-/ACSszfFykW7WVt4A4-ozz3ED6i4UhERUjcoQSkwhgQ=s900-mo-c-c0xffffffff-rj-k-no" />
        </LogoRow>
        <LogoRow>
            <Logo src="https://www.globalbankers.com/wp-content/uploads/2017/01/RGB_GB_Logo.png" />
            <Logo src="https://static1.squarespace.com/static/58b3a3dce3df2844f57df3bb/t/5ab30133575d1f7020a1b07b/1535474960130/" />
        </LogoRow>
    </React.Fragment>
);
