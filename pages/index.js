import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/request";

export default function App({ results }) {
  return (
    <div className='w-full flex flex-col items-center text-lg min-h-screen bg-gray-800 text-gray-300 max-w-[2400px] mx-auto'>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const req = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`)
    .then(res => res.json());
  return {
    props: {
      results: req.results,
    }
  }
}
