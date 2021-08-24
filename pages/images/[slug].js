// export async function getEdgeProps({ params }) {
//   const { slug } = params;
//   console.log(slug);
//   return {
//     props: {
//       slug,
//     },
//     // Revalidate every 8 hours
//     revalidate: 60 * 60 * 8,
//   };
// }

export default async function About() {
  return (
    <>
      {/* <p>{slug.title.rendered}</p> */}
      <h1>About</h1>
    </>
  );
}
