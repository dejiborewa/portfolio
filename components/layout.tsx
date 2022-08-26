// import Image from "next/image";
import Head from "next/head";
import React from "react";
// import DP from "../public/assets/dejiBW.webp";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Ayodeji | Portfolio</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
