import Layout from '../components/layout.js';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <section className="paper">
        <article className="paperHead"></article>
        <p>&nbsp;</p>
        <article>
          <h1>Coming Soon!</h1>
          <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js" />
            <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
          </ul>
        </article>
      </section>
    </Layout>
  );
}