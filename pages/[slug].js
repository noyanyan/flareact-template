export function getEdgeProps({ params }) {
  const { slug } = params;
  console.log(slug);

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
      <p>{slug}</p>
      <h1>About</h1>
    </>
  );
}
