import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <p>Time to test the app</p>
        <Link href="/test">Testing</Link>
      </main>
    </>
  );
}
