{/* useEffect(() => {
  *   fetch('http://localhost:3333/episodes')
  *     .then(resp => resp.json())
  *     .then(data => console.log(data))
  *     .catch(e => console.log(e))
  * }, []) */}
// SPA example

const Home = (props: any) => {
  return (
    <>
      <h1>Podcastr</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>

  )
}


//export const getServerSideProps = async () => {}
// é o SSR Server-side rendering

// getStaticProps é o SSG Static site generation
export const getStaticProps = async () => {
  const resp = await fetch('http://localhost:3333/episodes');
  const data = await resp.json();

  console.log(`Data from props ${data}`);
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

export default Home;
