import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/cv">
          <a>cv</a>
        </Link>
      </div>
      <div>
        <Link href="/work">
          <a>work</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </nav>
  );
}
