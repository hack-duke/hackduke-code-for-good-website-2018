import React from 'react';
import { renderStylesToString } from 'emotion-server';

export default {
  inlineCss: true,
  renderToHtml: (render, Comp) =>
    renderStylesToString(render(React.createElement(Comp))),
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <title>HackDuke</title>
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/hackduke-favicon.png" />
        <meta name="developed-by" content="Yunyu Lin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The nation's premier hackathon for tech and social good. Apply now!"
        />
        <meta
          property="og:image"
          content="https://www.hackduke.org/apply/site-thumbnail.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
