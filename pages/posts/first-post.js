import Link from "next/link";

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                {/* client side navigation */}
                <Link href="/">
                    <a>Back home</a>
                </Link>

                {/* <a href="/">Back home</a> */}
            </h2>
        </>
    )
}