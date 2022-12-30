import Head from "next/head";
import Link from "next/link";
import { initFirebase } from "../components/firebase/firebase.config";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Task</title>
      </Head>
    </div>
  );
}
