import Link from "next/link";

const AboutPage = () => {
  return (
    <main>
      <h1>About Page</h1>
      <p>
        <Link href="/about">Home</Link>
      </p>
    </main>
  );
};

export default AboutPage;
