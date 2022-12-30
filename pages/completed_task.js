import Head from "next/head";
import React from "react";
import Layout from "../layout/Layout";

const Completed_Task = () => {
  return (
    <div>
      <Head>
        <title>Completed-Task</title>
      </Head>
      <Layout>
      <h2 className="text-center text-4xl mb-2">Completed Task</h2>
      </Layout>
    </div>
  );
};

export default Completed_Task;
