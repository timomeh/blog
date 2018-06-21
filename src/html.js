/* eslint  react/prop-types: 0 */
import React from 'react'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="de" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.headComponents}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#B7FFDE"
          />
          <meta name="apple-mobile-web-app-title" content="timomeh" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b7ffde" />
          <meta name="msapplication-TileColor" content="#b7ffde" />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,500i"
            rel="stylesheet"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          <noscript>
            Bitte aktiviere JavaScript. Please turn on JavaScript.
          </noscript>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
