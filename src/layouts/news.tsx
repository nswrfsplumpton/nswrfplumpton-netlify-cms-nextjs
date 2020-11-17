import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

type Props = {
  title: string;
};
export default function Index({
  title
}: Props) {
  return ({ children }) => {
    return (
      <Layout>
        <div>{title}</div>
        <main>{children}</main>
      </Layout>
    );
  };
}
