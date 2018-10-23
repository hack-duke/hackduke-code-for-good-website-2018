import React from 'react';

import { css } from 'emotion';
import styled from 'react-emotion';
import detectPassiveEvents from 'detect-passive-events';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import memoize from 'memoize-one';

import { MAX_WIDTH, HideOnMobile, TitleFont } from '../common-styles';

const navHeightPx = 72;
const fullShadowScrollOffset = navHeightPx;

const Nav = styled('div')`
  ${HideOnMobile};
  ${TitleFont};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${navHeightPx}px;
  z-index: 64;
`;

const NavItemsWrapper = styled('div')`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 0 144px;
  padding-right: 0;
  height: 100%;
`;

const navItem = ({ active, color }) => css`
  ${TitleFont};
  color: ${active ? color : '#2b2b2b'};
  height: 100%;
  font-size: 1.1em;
  line-height: ${navHeightPx}px;
  font-weight: bold;
  display: inline-block;
  margin-right: 40px;
  text-align: center;
  border-bottom: ${active ? 6 : 0}px solid ${active ? color : 'transparent'};
  transition: color 0.2s, border-bottom 0.2s;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: ${color};
    border-bottom: 6px solid ${color};
  }
`;

const MLHBadge = styled('img')`
  width: 100px;
  position: absolute;
  right: 22px;
  display: none;

  @media screen and (min-width: 900px) {
    display: inline-block;
  }

  @media screen and (min-width: 1600px) {
    right: 50px;
  }
`;

class NavContents extends React.PureComponent {
  render() {
    const { activeItemID, navItems } = this.props;
    return (
      <NavItemsWrapper>
        {navItems.map(({ title, id, titleColor }) => (
          <AnchorLink
            offset={navHeightPx / 2}
            key={id}
            css={navItem({
              active: activeItemID === id,
              color: titleColor
            })}
            href={`#${id}`}
          >
            {title}
          </AnchorLink>
        ))}
        <a
          href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
          target="_blank"
          rel="noopener"
        >
          <MLHBadge
            alt="Major League Hacking 2019 Hackathon Season"
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg"
          />
        </a>
      </NavItemsWrapper>
    );
  }
}

const navBackgroundStyle = css`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${navHeightPx}px;
  background-color: white;
  z-index: -1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.0333), 0 0 40px rgba(0, 0, 0, 0.075);
`;

class NavBackground extends React.PureComponent {
  render() {
    // Scrolling optimization - bypass Emotion for background opacity
    const { opacity } = this.props;
    return <div className={navBackgroundStyle} style={{ opacity }} />;
  }
}

export default class Navbar extends React.Component {
  state = { activeItemID: this.props.navItems[0].id, scrollOffset: 0 };

  componentDidMount() {
    this.widthMediaQuery = window.matchMedia(`(min-width: ${768}px)`);
    this.widthMediaQuery.addListener(this.onWidthQueryResult);
    this.onWidthQueryResult({ matches: this.widthMediaQuery.matches });
  }

  componentWillUnmount() {
    if (this.widthMediaQuery !== null) {
      this.widthMediaQuery.removeListener(this.onWidthQueryResult);
      this.onWidthQueryResult({ matches: false });
    }
  }

  render() {
    const { activeItemID, scrollOffset } = this.state;
    const navBackgroundOpacity = Math.min(
      scrollOffset / fullShadowScrollOffset,
      1
    );
    return (
      <Nav>
        <NavContents activeItemID={activeItemID} {...this.props} />
        <NavBackground opacity={navBackgroundOpacity} />
      </Nav>
    );
  }

  getItemRefNodes = memoize(navItems =>
    navItems.map(({ id }) => [id, document.getElementById(id)])
  );

  widthMediaQuery = null;

  onWidthQueryResult = ({ matches }) => {
    if (matches) {
      window.addEventListener(
        'scroll',
        this.handleScroll,
        detectPassiveEvents.hasSupport ? { passive: false } : false
      );
      this.handleScroll();
    } else {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };

  handleScroll = () => {
    this.setState({
      scrollOffset: window.scrollY
    });

    for (const [id, itemRefNode] of [
      ...this.getItemRefNodes(this.props.navItems)
    ].reverse()) {
      const { top } = itemRefNode.getBoundingClientRect();
      if (top < navHeightPx) {
        this.setState({ activeItemID: id });
        break;
      }
    }
  };
}
