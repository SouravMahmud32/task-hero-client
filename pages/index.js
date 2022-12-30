import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Task</title>
      </Head>
      <Layout>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Hero Task
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Daily Task for your daily life.
            </p>
            <div className="flex flex-wrap justify-center">
              <Link href="/addtask">
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                  Get started
                </button>
              </Link>
              <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
                Learn more
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
