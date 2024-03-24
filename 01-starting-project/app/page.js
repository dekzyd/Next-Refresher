import Link from "next/link";
export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>
        <Link href="/">About Us</Link>
      </p>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
