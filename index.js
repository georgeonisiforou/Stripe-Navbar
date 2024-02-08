import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Navbar />
      </Main>
    </>
  );
}
