import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* we cannot add  title tag here,title tags are to be added component by component
          or page by page basis  */}
          {/* You can also add some some useful meta tags particularly useful for SEO */}
          <meta name="description" content="Indian Short Video App" />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex,nofollow" />
          {/* <meta name="viewport" content="width=device-width" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* But we can add any link like cdn link for NProgress css file */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          {/* include the main component for all the main content */}
          <Main />
          {/* include all the scripts */}
          <NextScript />
          {/* here is a great place to apply some global styles */}
          <style global jsx>{`
            body {
              // font-family: 'Roboto', sans-serif;
            }
          `}</style>
        </body>
      </html>
    );
  }
}

// So the document is a really great place to put in the head for SEO that's not  specific example title

// would need to go to the head component of an  individual like layout.

// If you want to persist among all your pages to modify a simple document that so is the custom underscore

// documents page.
