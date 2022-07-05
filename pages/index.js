import Head from "next/head";
import Introduction from "../components/Introduction";
import WorkSection from "../components/WorkSection";
import Header from "../layouts/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haute Studio Webpage</title>
        <meta name="Haute Studio App" content="Developed by Blyncnov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <WorkSection />
      <Introduction />
    </>
  );
}
