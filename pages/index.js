import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
export default function Home() {
  return (
    <div>
      <Head>
        <title>hulu clone</title>
        <link> rel= "icon" href="/favicon.ico"</link>
      </Head>

      <Header />
      <Nav />

      <Results />
    </div>
  );
}
