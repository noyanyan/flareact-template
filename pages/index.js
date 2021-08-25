import { Head } from 'flareact/document';
import { Helmet } from 'react-helmet';
// export function getEdgeProps({ params }) {
//   const { slug } = params;

//   return {
//     props: {
//       slug,
//     },
//     // Revalidate every 8 hours
//     revalidate: 60 * 60 * 8,
//   };
// }

export default function Index() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-red-500 text-xl m-10">
        You&apos;re running React on the Edge!
      </h1>
    </div>
  );
}
