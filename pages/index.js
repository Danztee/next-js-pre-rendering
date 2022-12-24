import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>next js pre-rendering</h1>
      <Link href="/users">Users</Link> <br /> <br />
      <Link href="/posts">Post</Link>
    </>
  );
}
