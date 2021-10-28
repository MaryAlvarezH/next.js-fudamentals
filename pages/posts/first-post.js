import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 class="title">First Post</h1>
            <h2>
                {/* client side navigation */}
                <Link href="/">
                    <a>Back home</a>
                </Link>

                {/* <a href="/">Back home</a> */}
            </h2>
        </Layout>
    )
}