import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>Weather App</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="An app to give you the current weather details of an area"
      />
      <meta
        name="keywords"
        content="weather app, next.js, typescript, tailwind css, open weather"
      />
      <meta name="author" content="Richard Matovu" />
      <meta
        name='msapplication-TileImage'
        content='/logo.png'
      />

      {/* App Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;