import Link from "next/link";

export default function Menu() {
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
        <Link href="/home">
          <a>Home</a>
        </Link>
      </div>
    </nav>
  );
}
