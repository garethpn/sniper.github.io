import Layout from '../components/layout.js';
import Head from 'next/head';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Gareth's place</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="paper">
        <article className="paperHead"></article>
        <p>&nbsp;</p>
        <article contenteditable="false">
          <p>Hello</p>
          <p>I am guessing that you meant to come here, rather than it being a massive coincidence that you typed in a random URL and landed on this page, in which case, what are the chances of that?</p>
          <p><b>Disclaimer</b>: that was a rhetorical question, although if you are so inclined to work it out, be my guest &amp; tweet me your findings.</p>
          <p>Welcome to the hopefully interesting, often nonsensical rantings of a software developer.</p>
          <p>I hope you enjoy your stay.</p>
          <p>Gareth.</p>
        </article>
      </section>
    </Layout>
  );
}