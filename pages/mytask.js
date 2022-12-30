import Head from "next/head";
import Layout from "../layout/Layout";

const mytask = () => {
  return (
    <Layout>
      <Head>
        <title>My-Task</title>
      </Head>
      <h2 className="text-center text-4xl mb-2">My Task</h2>
      <div className="my-8 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </Layout>
  );
};

export default mytask;
