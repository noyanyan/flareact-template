import { useRouter } from 'flareact/router';
import { Helmet } from 'react-helmet';
// build-in のHeaderはエラーが多いので、内部で使われているreact-helmetを直接呼び出す

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
  const router = useRouter();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <meta
          property="og:title"
          content="Flareact Demo - React on Edge Worker"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://flareact-template.noyan.workers.dev${router.asPath}`}
        />
        <meta property="og:description" content="PLEASE_REPLACE_DESCRIPTION" />
        <meta
          property="og:image"
          content="https://flareact-template.noyan.workers.dev/tree.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
        <div
          className="
          bg-white
          shadow-md
          h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-96
        "
        >
          <img
            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
            src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
            alt="image"
          />

          <div
            className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
          >
            <div className="flex flex-col justify-start items-baseline">
              <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                Furniture
              </h1>
              <span className="text-xs text-indigo-300 mt-0">by supplier</span>
            </div>
            <p className="text-xs text-gray-500 w-4/5">
              Ergonimical for human body curv
            </p>
            <div className="w-full flex justify-between items-center">
              <h1 className="font-bold text-gray-500">$200</h1>
              <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
