import { Head } from 'flareact/document';
import { Helmet } from 'react-helmet';
export function getEdgeProps({ params }) {
  const { slug } = params;

  return {
    props: {
      slug,
    },
    // Revalidate every 8 hours
    revalidate: 60 * 60 * 8,
  };
}

export default function About({ slug }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <p>{slug}</p>
      <h1>About</h1>
    </>
  );
}
