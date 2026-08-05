import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js TDD Application</h1>

      <p>Authentication application created using Test Driven Development.</p>

      <nav>
        <ul>
          <li>
            <Link href="/signup">Create Account</Link>
          </li>

          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
