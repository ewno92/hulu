import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
export default function Home(results) {
  // console.log(results);
  return (
    <div>
      <Head>
        <title>hulu clone</title>
        {/* <link> rel= "icon" href="#"</link> */}
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // const request = await fetch(
  //   "https://"
  // ).then((res) => res.json());

  const request = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
