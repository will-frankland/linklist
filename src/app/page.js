import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <Link href={'/'}>LinkList</Link>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div>
          <Link href={'/login'}>Sign In</Link>
          <Link href={'/register'}>Create Account</Link>
        </div>
      </header>
      <secion></secion>
    </main>
  );
}
